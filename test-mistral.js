require('dotenv').config();
const { Mistral } = require('@mistralai/mistralai');

const client = new Mistral({
    apiKey: process.env.MISTRAL_API_KEY
});

async function testMistral() {
    console.log('🧪 Test de connexion à Mistral AI...\n');
    
    try {
        const response = await client.chat.complete({
            model: 'mistral-small-latest',
            messages: [{
                role: 'user',
                content: 'Bonjour ! Peux-tu te présenter en une phrase ?'
            }]
        });
        
        const content = response.choices[0].message.content;
        const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
        
        console.log('✅ Connexion réussie !');
        console.log('📝 Réponse de Mistral :');
        console.log(content);
        console.log(`\n📊 Nombre de mots (tokens): ${wordCount}`);
        
    } catch (error) {
        console.error('❌ Erreur de connexion:', error.message);
        console.log('\n💡 Vérifiez votre clé API dans le fichier .env');
    }
}

testMistral();