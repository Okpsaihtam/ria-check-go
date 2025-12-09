# 📋 DOSSIER ÉLÈVE - Mission « MobilFirst » RIA Check & Go

---

## 📌 Informations personnelles

**Nom :** [Votre nom]  
**Prénom :** [Votre prénom]  
**Binôme :** [Nom du binôme si applicable]  
**Classe :** BTS SIO SLAM  
**Date :** Décembre 2024

---

## 🎯 Votre Mission

**MobilFirst**, startup européenne de 50 personnes, a décroché un contrat majeur : développer **RIA Check & Go**, une application mobile avec chatbot conversationnel pour aider les entreprises à évaluer leur conformité au Règlement européen sur l'Intelligence Artificielle (RIA).

Le CTO a démissionné, laissant un choix technologique crucial non tranché. Le CEO vous mandate comme consultants. L'avenir de la startup et ce contrat de **200K€** dépendent de votre analyse.

---

## 📊 Brief Projet — MobilFirst & RIA Check & Go

### Contexte entreprise
- **Client :** MobilFirst (startup 50 personnes)
- **Projet :** RIA Check & Go — Chatbot conformité IA
- **Secteur :** RegTech (technologie réglementaire)

### Contraintes du projet
- **Budget total :** 80 000 €
- **Délai :** 6 mois
- **Plateformes :** iOS + Android
- **Langues :** Français, Anglais, Allemand
- **Mode hors-ligne :** Requis (audits sur site sans connexion)
- **Sécurité :** Données de conformité sensibles

### Équipe disponible

| Profil | Nombre | Compétences |
|--------|--------|-------------|
| Développeurs web seniors | 3 | JavaScript, React, Node.js |
| Développeurs Android juniors | 2 | Kotlin (bases), Java |
| Designer UI/UX | 1 | Figma, Material Design |
| Chef de projet | 1 | Méthode Agile/Scrum |

---

## 📚 Le Règlement sur l'IA (RIA) en bref

Le **RIA (AI Act)** est la première réglementation mondiale complète sur l'IA, entrée en vigueur le **1er août 2024**.

### Classification des risques

| Niveau | Exemples | Obligations |
|--------|----------|-------------|
| 🔴 **INACCEPTABLE** | Scoring social, manipulation | **INTERDIT** |
| 🟠 **HAUT RISQUE** | RH, crédit, santé, justice | Conformité stricte obligatoire |
| 🟡 **RISQUE LIMITÉ** | Chatbots, deepfakes | Transparence obligatoire |
| 🟢 **RISQUE MINIMAL** | Jeux vidéo, filtres photo | Pas d'obligation |

**Sanctions :** Jusqu'à **35 millions €** ou **7% du CA mondial**

---

## 📋 Document 1 — Tableau comparatif

| Critère | NATIF | HYBRIDE | CROSS-PLATFORM | PWA |
|---------|-------|---------|----------------|-----|
| **Définition** | Application développée spécifiquement pour une plateforme (Swift/iOS, Kotlin/Android) | Application web encapsulée dans un conteneur natif (Cordova, Capacitor) | Code unique compilé en natif pour chaque plateforme (React Native, Flutter) | Application web progressive accessible via navigateur |
| **Technologies** | Swift (iOS), Kotlin/Java (Android) | HTML/CSS/JS + Cordova/Ionic | React Native (JS), Flutter (Dart) | HTML/CSS/JS + Service Workers |
| **Performance** | ⭐⭐⭐⭐⭐ Excellente (accès direct OS) | ⭐⭐⭐ Moyenne (webview = surcouche) | ⭐⭐⭐⭐ Très bonne (bridge natif optimisé) | ⭐⭐ Limitée (dépend du navigateur) |
| **Mutualisation code** | ❌ 0% (code séparé par plateforme) | ✅ 90-95% (UI web mutualisée) | ✅ 85-95% (code business mutualisé) | ✅ 100% (même code partout) |
| **Accès API/capteurs** | ⭐⭐⭐⭐⭐ Complet (caméra, GPS, Bluetooth, NFC...) | ⭐⭐⭐ Moyen (via plugins, peut être limité) | ⭐⭐⭐⭐ Bon (via bridges natifs) | ⭐⭐ Limité (dépend du navigateur, pas de NFC) |
| **Time-to-market** | 6-12 mois (2 apps distinctes) | 3-4 mois (1 codebase) | 3-5 mois (1 codebase + configs) | 1-2 mois (déploiement immédiat) |
| **Distribution** | App Store + Google Play (validation 2-7 jours) | App Store + Google Play (validation 2-7 jours) | App Store + Google Play (validation 2-7 jours) | URL web (instantané, pas de validation) |
| **Adapté chatbot ?** | ⚠️ Surdimensionné pour un chatbot conversationnel | ✅ Oui (UI web = interface chat naturelle) | ✅ Oui (UI moderne + performance) | ✅ Parfait (pas de calcul lourd) |
| **Mode hors-ligne** | ⭐⭐⭐⭐⭐ Natif (base locale, fichiers) | ⭐⭐⭐⭐ Bon (localStorage, SQLite) | ⭐⭐⭐⭐ Bon (AsyncStorage, Realm) | ⭐⭐⭐⭐⭐ Excellent (Service Workers, Cache API) |

### Vérification des sources (obligatoire)

| Affirmation IA | Source consultée | Confirmé ? | Correction |
|----------------|------------------|------------|------------|
| **"PWA peut fonctionner hors-ligne grâce aux Service Workers"** | developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Offline_Service_workers | ☑️ Oui | Aucune |
| **"React Native permet de partager 85-95% du code entre iOS et Android"** | reactnative.dev/docs/platform-specific-code + Retour d'expérience Airbnb (60-95% selon complexité UI) | ☑️ Oui | Varie selon la complexité de l'UI |
| **"Flutter utilise le langage Dart et compile en code natif"** | flutter.dev/docs/resources/architectural-overview | ☑️ Oui | Aucune |

---

## 🌳 Document 2 — Arbre de décision

### Question 1 : La performance ou l'accès matériel est-il critique ?

**☐ OUI → Application native**  
**☑️ NON → Passer à Q2**

#### Justification pour RIA Check & Go :

Notre chatbot RIA Check & Go ne nécessite pas d'accès matériel avancé (pas de 3D, pas de réalité augmentée, pas de capteurs biométriques). Les fonctionnalités sont :
- Interface de chat conversationnel (texte)
- Appels API à Mistral AI (réseau)
- Stockage de données de session (localStorage/IndexedDB)
- Pas de traitement graphique intensif

➡️ **La performance native n'est pas critique pour un chatbot conversationnel.**

---

### Question 2 : La visibilité en store est-elle indispensable ?

**☑️ OUI → Passer à Q3**  
**☐ NON → PWA possible**

#### Justification pour RIA Check & Go :

Le cahier des charges stipule :
- **"Plateformes iOS + Android"** → Présence en App Store et Google Play recommandée
- **Crédibilité B2B** → Les entreprises cherchent des apps professionnelles dans les stores
- **Installation facilitée** → Les utilisateurs d'entreprise ont l'habitude des stores
- **Notifications push** → Utiles pour rappels de conformité (meilleur support dans les apps natives/hybrides)

⚠️ **Cependant**, une PWA peut aussi être ajoutée au Microsoft Store et Google Play via TWA (Trusted Web Activity). Mais pour maximiser la visibilité et la confiance client, une distribution en stores est préférable.

➡️ **Nous souhaitons la visibilité en stores pour la crédibilité B2B.**

---

### Question 3 : L'équipe est-elle majoritairement web ?

**☑️ OUI → React Native ou Hybride**  
**☐ NON → Passer à Q4**

#### Justification pour RIA Check & Go :

Analyse de l'équipe disponible :
- **3 développeurs web seniors** → JavaScript, React, Node.js (compétences web fortes)
- **2 développeurs Android juniors** → Kotlin bases, Java (compétences mobiles limitées)
- **1 designer UI/UX** → Figma, Material Design (capable de s'adapter)

**Ratio : 3 web seniors vs 2 Android juniors**

➡️ **L'équipe est majoritairement orientée web (JavaScript/React).** 

Choisir React Native ou une solution hybride (Ionic React) permettrait :
- ✅ De capitaliser sur les compétences React existantes
- ✅ De former rapidement les juniors Android (JavaScript plus simple que Kotlin)
- ✅ De respecter le délai de 6 mois
- ✅ De mutualiser 85%+ du code entre iOS et Android

➡️ **React Native ou Hybride (Ionic/Capacitor) sont recommandés.**

---

### Question 4 : UI très personnalisée et homogène souhaitée ?

**☐ OUI → Flutter**  
**☑️ NON → Passer à Q5**

#### Justification pour RIA Check & Go :

Un chatbot conversationnel nécessite une interface simple et standardisée :
- **Bulles de messages** (style WhatsApp/Messenger)
- **Champ de saisie texte**
- **Boutons de réponse rapide**
- **Design Material Design / iOS natif**

Ces composants UI existent déjà dans :
- **React Native** → react-native-gifted-chat, react-native-paper
- **Ionic React** → @ionic/react avec composants prédéfinis

**Pas besoin d'UI ultra-personnalisée** comme :
- Animations 3D
- Transitions complexes
- Widgets totalement custom

➡️ **Une UI standardisée suffit. Flutter n'est pas nécessaire.**

---

### Question 5 : Budget et délai serrés ?

**☑️ OUI → Hybride (Ionic/Capacitor React)**  
**☐ NON → React Native**

#### Justification pour RIA Check & Go :

**Contraintes du projet :**
- **Budget** : 80 000€ (serré pour 2 plateformes natives)
- **Délai** : 6 mois
- **Mode hors-ligne** : Requis (audits sur site sans connexion)

**Comparaison Hybride vs React Native :**

| Critère | **Ionic/Capacitor React** | **React Native** |
|---------|---------------------------|------------------|
| **Courbe d'apprentissage** | ✅ Faible (React + HTML/CSS standard) | ⚠️ Moyenne (composants spécifiques RN) |
| **Composants UI** | ✅ Ionic Design System prêt à l'emploi | ⚠️ Nécessite plus de customisation |
| **Mode hors-ligne** | ✅ Excellent (Service Workers + Capacitor Storage) | ✅ Bon (AsyncStorage, NetInfo) |
| **Distribution stores** | ✅ Via Capacitor (iOS + Android) | ✅ Native |
| **Performance chat** | ✅ Suffisante (pas de rendu 60fps nécessaire) | ✅ Légèrement meilleure |
| **Temps de dev** | ✅ 3-4 mois (React + Ionic) | ⚠️ 4-5 mois (apprentissage RN) |
| **Coût** | ✅ ~60K€ (dans budget) | ⚠️ ~70-75K€ (limite budget) |

**Pour un chatbot conversationnel :**
- Pas besoin de 60fps d'animations
- Pas de calculs graphiques intensifs
- UI standardisée (bulles de chat)
- Priorité sur le **time-to-market** et le **budget**

➡️ **Hybride (Ionic React + Capacitor) offre le meilleur rapport qualité/prix/délai.**

---

## 🎯 Conclusion de l'arbre de décision

### Technologie recommandée : **HYBRIDE (Ionic React + Capacitor)**

### Résumé de l'argumentation :

Pour RIA Check & Go, **Ionic React avec Capacitor** est la solution optimale car :

1. **Équipe web forte** (3 seniors React) → capitalisation sur compétences existantes
2. **Budget respecté** (80K€) et **délai court** (6 mois) → développement accéléré
3. **Mutualisation code** 90%+ entre iOS/Android → maintenance simplifiée
4. **Mode hors-ligne natif** via Service Workers et Capacitor Storage → audits sans connexion
5. **UI chatbot standardisée** avec Ionic Design System → pas besoin de sur-performance native

**Alternative acceptable :** React Native (si budget +10K€ et +1 mois)  
**Rejeté :** Natif (trop coûteux, 2x le code), PWA seule (pas de stores, crédibilité moindre)

---

## 💻 Document 3 — Cahier des charges du prototype chatbot

### ✅ Fonctionnalités implémentées dans notre projet

| # | Fonctionnalité | Priorité | Statut | Critères de validation |
|---|----------------|----------|--------|------------------------|
| 1 | Interface de chat | Obligatoire | ✅ **FAIT** | Bulles de message différenciées user/bot, zone de chat scrollable |
| 2 | Message de bienvenue | Obligatoire | ✅ **FAIT** | "Bienvenue !" s'affiche au chargement avec bouton "Commencer l'évaluation" |
| 3 | Question OUI/NON | Obligatoire | ✅ **FAIT** | Champ de saisie texte (pas de boutons OUI/NON dans notre version, mais questions/réponses) |
| 4 | Logique conditionnelle | Obligatoire | ✅ **FAIT** | Mistral AI pose 6 questions adaptatives selon les réponses de l'utilisateur |
| 5 | Choix multiple domaine | Obligatoire | ✅ **FAIT** | L'IA pose la question du domaine (RH, santé, justice, commerce) et adapte ses questions suivantes |
| 6 | Message de résultat | Obligatoire | ✅ **FAIT** | Page de résultats avec score/100, niveau de risque (couleur), justification, recommandations |
| 7 | Style RIA Check & Go | Bonus | ✅ **FAIT** | Dégradé violet (header), design moderne, animations CSS, responsive |

### 🎯 Fonctionnalités bonus implémentées

| Fonctionnalité | Description |
|----------------|-------------|
| **Comptage tokens** | Affiche le nombre de mots générés par le chatbot en temps réel |
| **Rapport PDF (HTML)** | Génération d'un rapport complet avec design professionnel dans un nouvel onglet |
| **Historique de conversation** | Stocké en session côté serveur (Express Sessions) |
| **Détection fin de conversation** | L'IA sait quand elle a posé les 6 questions et propose l'analyse |
| **Demande de devis** | Formulaire de contact intégré dans les résultats |
| **Réinitialisation** | Bouton pour recommencer une nouvelle évaluation |

---

### 🔄 Scénario de conversation implémenté

**Notre version est plus avancée que le scénario de base :**