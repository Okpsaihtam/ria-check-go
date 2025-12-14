require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mistralService = require('./mistralService');
const { riaCategories } = require('./riaRules');

const app = express();
const PORT = process.env.PORT || 10000;

// Middlewares
app.use(express.json());
app.use(express.static('public'));

// Configuration des sessions
app.use(session({
    secret: process.env.SESSION_SECRET || 'dev-secret-change-in-production',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 3600000 // 1 heure
    }
}));

/**
 * Route principale pour le chat
 * POST /api/chat
 */
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || message.trim() === '') {
            return res.status(400).json({ 
                error: 'Le message ne peut pas être vide' 
            });
        }

        // Initialisation de l'historique de conversation
        if (!req.session.conversationHistory) {
            req.session.conversationHistory = [];
            mistralService.resetTokenCount();
        }

        // Ajout du message utilisateur à l'historique
        req.session.conversationHistory.push({
            role: 'user',
            content: message
        });

        // Appel à Mistral AI avec tout l'historique
        const response = await mistralService.chat(
            req.session.conversationHistory
        );

        // Ajout de la réponse de l'IA à l'historique
        req.session.conversationHistory.push({
            role: 'assistant',
            content: response.content
        });

        // Vérifier si la conversation est terminée
        const isComplete = mistralService.isConversationComplete(response.content);

        res.json({ 
            response: response.content,
            messageCount: req.session.conversationHistory.length / 2,
            tokensUsed: response.tokensUsed,
            totalTokens: response.totalTokens,
            conversationComplete: isComplete
        });

    } catch (error) {
        console.error('Erreur API chat:', error);
        res.status(500).json({ 
            error: 'Erreur lors du traitement de votre message',
            details: error.message 
        });
    }
});

/**
 * Route pour analyser le niveau de risque
 * POST /api/analyze
 */
app.post('/api/analyze', async (req, res) => {
    try {
        if (!req.session.conversationHistory || 
            req.session.conversationHistory.length < 4) {
            return res.status(400).json({ 
                error: 'Conversation trop courte pour une analyse' 
            });
        }

        const analysis = await mistralService.analyzeRiskLevel(
            req.session.conversationHistory
        );

        // Enrichissement avec les données de catégorie
        const categoryData = riaCategories[analysis.riskLevel];
        
        res.json({
            ...analysis,
            ...categoryData,
            conversationLength: req.session.conversationHistory.length,
            totalTokensUsed: mistralService.getTotalTokens()
        });

    } catch (error) {
        console.error('Erreur analyse:', error);
        res.status(500).json({ 
            error: 'Erreur lors de l\'analyse',
            details: error.message 
        });
    }
});

/**
 * Route pour réinitialiser la conversation
 * POST /api/reset
 */
app.post('/api/reset', (req, res) => {
    req.session.conversationHistory = [];
    mistralService.resetTokenCount();
    res.json({ message: 'Conversation réinitialisée' });
});

/**
 * Route pour obtenir l'historique
 * GET /api/history
 */
app.get('/api/history', (req, res) => {
    res.json({
        history: req.session.conversationHistory || [],
        messageCount: req.session.conversationHistory ? 
            req.session.conversationHistory.length / 2 : 0,
        totalTokens: mistralService.getTotalTokens()
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║   🤖 RIA Check & Go Server             ║
║   ✅ Serveur démarré avec succès       ║
║   🌐 http://localhost:${PORT}            ║
╚════════════════════════════════════════╝
    `);
});

// Gestion des erreurs non capturées
process.on('unhandledRejection', (error) => {
    console.error('Erreur non gérée:', error);
});