require('dotenv').config();
const { Mistral } = require('@mistralai/mistralai');

const client = new Mistral({
    apiKey: process.env.MISTRAL_API_KEY
});

const SYSTEM_PROMPT = `Tu es un expert en conformité au Règlement sur l'Intelligence Artificielle (RIA / AI Act).

Ta mission est d'aider les entreprises à évaluer leur conformité en suivant ce processus :

1. Commence par te présenter brièvement et expliquer ton rôle
2. Pose EXACTEMENT 6 questions essentielles pour comprendre le système d'IA :
   - Question 1 : Quel est le domaine d'application ? (RH, santé, justice, commerce, etc.)
   - Question 2 : Quelles décisions le système prend-il ? Sont-elles automatisées ?
   - Question 3 : Y a-t-il un impact sur les droits fondamentaux des personnes ?
   - Question 4 : Le système traite-t-il des données sensibles (biométrie, santé, etc.) ?
   - Question 5 : Y a-t-il une supervision humaine dans les décisions ?
   - Question 6 : Quelle est la finalité principale du système ?

3. IMPORTANT : 
   - Pose UNE SEULE question à la fois
   - Adapte tes questions en fonction des réponses précédentes
   - Après avoir posé les 6 questions et reçu les réponses, termine par : "Merci pour toutes ces informations. J'ai maintenant tous les éléments nécessaires pour établir votre diagnostic de conformité RIA."
   - NE propose JAMAIS toi-même de générer le rapport

4. Sois professionnel et pédagogue.`;

class MistralService {
    constructor() {
        this.totalTokensUsed = 0;
    }

    /**
     * Compte le nombre de mots dans un texte (1 mot = 1 token)
     * @param {string} text - Texte à analyser
     * @returns {number} - Nombre de mots
     */
    countWords(text) {
        if (!text || typeof text !== 'string') return 0;
        
        // Nettoyer le texte et compter les mots
        const cleanText = text.trim();
        if (cleanText === '') return 0;
        
        // Séparer par espaces et filtrer les éléments vides
        const words = cleanText.split(/\s+/).filter(word => word.length > 0);
        return words.length;
    }

    /**
     * Envoie une conversation complète à Mistral AI
     * @param {Array} messages - Historique des messages
     * @returns {Promise<Object>} - Réponse de l'IA avec usage
     */
    async chat(messages) {
        try {
            const fullMessages = [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages
            ];

            const response = await client.chat.complete({
                model: 'mistral-small-latest',
                messages: fullMessages,
                temperature: 0.7,
                max_tokens: 1000
            });

            const content = response.choices[0].message.content;
            
            // Compter les mots (tokens) dans la réponse du chatbot
            const tokensUsed = this.countWords(content);
            this.totalTokensUsed += tokensUsed;

            console.log(`💬 Réponse du chatbot: "${content.substring(0, 50)}..."`);
            console.log(`📊 Mots (tokens) dans cette réponse: ${tokensUsed}`);
            console.log(`📊 Total mots (tokens) utilisés: ${this.totalTokensUsed}`);

            return {
                content: content,
                tokensUsed: tokensUsed,
                totalTokens: this.totalTokensUsed
            };
        } catch (error) {
            console.error('Erreur Mistral AI:', error);
            throw new Error('Impossible de contacter Mistral AI');
        }
    }

    /**
     * Analyse la conversation pour déterminer le niveau de risque
     * @param {Array} messages - Historique de conversation
     * @returns {Object} - Classification et score
     */
    async analyzeRiskLevel(messages) {
        const analysisPrompt = `Analyse cette conversation et détermine le niveau de risque RIA du système d'IA décrit.

Réponds UNIQUEMENT avec un JSON dans ce format exact :
{
  "riskLevel": "INACCEPTABLE" | "ÉLEVÉ" | "LIMITÉ" | "MINIMAL",
  "score": 0-100,
  "justification": "explication détaillée de 2-3 phrases sur pourquoi ce niveau a été attribué",
  "recommendations": ["recommandation 1", "recommandation 2", "recommandation 3"]
}`;

        const analysisMessages = [
            ...messages,
            { role: 'user', content: analysisPrompt }
        ];

        const response = await this.chat(analysisMessages);
        
        try {
            const jsonMatch = response.content.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const result = JSON.parse(jsonMatch[0]);
                result.totalTokensUsed = this.totalTokensUsed;
                
                console.log(`✅ Analyse terminée - Total tokens: ${this.totalTokensUsed}`);
                
                return result;
            }
            throw new Error('Format de réponse invalide');
        } catch (error) {
            console.error('Erreur parsing JSON:', error);
            return {
                riskLevel: 'LIMITÉ',
                score: 70,
                justification: 'Analyse en cours. Le système nécessite une évaluation plus approfondie pour déterminer précisément son niveau de conformité RIA.',
                recommendations: ['Consulter un expert RIA', 'Documenter le système', 'Évaluer les impacts'],
                totalTokensUsed: this.totalTokensUsed
            };
        }
    }

    /**
     * Vérifie si toutes les questions ont été posées
     * @param {string} lastResponse - Dernière réponse de l'assistant
     * @returns {boolean}
     */
    isConversationComplete(lastResponse) {
        const completionPhrases = [
            'tous les éléments nécessaires',
            'toutes ces informations',
            'j\'ai maintenant tous',
            'diagnostic de conformité',
            'établir votre diagnostic',
            'j\'ai collecté toutes'
        ];
        
        const lowerResponse = lastResponse.toLowerCase();
        const isComplete = completionPhrases.some(phrase => lowerResponse.includes(phrase));
        
        if (isComplete) {
            console.log(`✅ Conversation complète détectée !`);
            console.log(`📊 Total final de mots (tokens): ${this.totalTokensUsed}`);
        }
        
        return isComplete;
    }

    /**
     * Réinitialise le compteur de tokens
     */
    resetTokenCount() {
        console.log(`🔄 Réinitialisation du compteur de tokens (était à ${this.totalTokensUsed})`);
        this.totalTokensUsed = 0;
    }

    /**
     * Obtient le total de tokens utilisés
     */
    getTotalTokens() {
        return this.totalTokensUsed;
    }
}

module.exports = new MistralService();