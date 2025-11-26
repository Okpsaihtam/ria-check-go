/**
 * Définition des catégories de risque selon le RIA
 */
const riaCategories = {
    INACCEPTABLE: {
        score: 0,
        label: 'Risque Inacceptable',
        color: '#dc3545',
        keywords: ['manipulation', 'scoring social', 'subliminal', 'exploitation', 'vulnérabilité'],
        description: 'Système d\'IA interdit par le RIA',
        recommendations: [
            '🚫 Arrêt immédiat du système',
            '⚖️ Consultation juridique urgente',
            '🔄 Refonte complète du projet nécessaire',
            '📋 Vérification de conformité légale obligatoire'
        ]
    },
    ÉLEVÉ: {
        score: 35,
        label: 'Risque Élevé',
        color: '#fd7e14',
        keywords: ['recrutement', 'justice', 'santé', 'biométrique', 'crédit', 'éducation', 'infrastructure'],
        description: 'Réglementation stricte requise',
        recommendations: [
            '📄 Documentation technique complète obligatoire',
            '🛡️ Mise en place d\'un système de gestion des risques',
            '✅ Évaluation de conformité par organisme notifié',
            '📝 Enregistrement dans le registre européen des systèmes IA',
            '👥 Surveillance humaine continue requise',
            '📊 Tests rigoureux et validation avant déploiement'
        ]
    },
    LIMITÉ: {
        score: 70,
        label: 'Risque Limité',
        color: '#ffc107',
        keywords: ['chatbot', 'deepfake', 'génération', 'contenu synthétique', 'détection émotion'],
        description: 'Obligations de transparence',
        recommendations: [
            'ℹ️ Informer clairement les utilisateurs qu\'ils interagissent avec une IA',
            '🏷️ Marquer tous les contenus générés par IA',
            '📢 Transparence sur les capacités et limites du système',
            '📖 Documentation utilisateur accessible',
            '🔍 Traçabilité des décisions prises par l\'IA'
        ]
    },
    MINIMAL: {
        score: 90,
        label: 'Risque Minimal',
        color: '#28a745',
        keywords: ['recommandation', 'filtrage', 'analyse', 'automatisation', 'suggestion'],
        description: 'Peu ou pas de réglementation spécifique',
        recommendations: [
            '✨ Application des bonnes pratiques de développement',
            '📚 Documentation technique et utilisateur claire',
            '🧪 Tests de qualité réguliers',
            '🔒 Protection des données personnelles (RGPD)',
            '🔄 Amélioration continue du système'
        ]
    }
};

/**
 * Détermine la catégorie de risque en fonction des mots-clés
 * @param {string} text - Texte à analyser
 * @returns {string} - Catégorie de risque
 */
function determineRiskCategory(text) {
    const lowerText = text.toLowerCase();
    
    for (const [category, data] of Object.entries(riaCategories)) {
        for (const keyword of data.keywords) {
            if (lowerText.includes(keyword)) {
                return category;
            }
        }
    }
    
    return 'MINIMAL';
}

module.exports = { 
    riaCategories,
    determineRiskCategory
};