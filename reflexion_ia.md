# RÉFLEXION IA --- Journal de bord critique

Mission RIA Check & Go --- Développement Mobile

Étudiant(e) :\ Mathias
Binôme :\ Yannice
Date de début : 05/02/2025

------------------------------------------------------------------------

## Objectif de ce document

Ce journal sert à tracer l'utilisation de l'IA pendant le projet,
analyser la qualité des réponses reçues, identifier les erreurs et
limites, et démontrer une démarche critique dans l'utilisation des
outils IA.

------------------------------------------------------------------------

# Tableau de suivi des interactions

  -----------------------------------------------------------------------------------------------
  Date         Outil IA Prompt / Question                    Utile ? Erreur ? Action corrective
  ------------ -------- ------------------------------------ ------- -------- -------------------
  05/02/2025   Claude   Génère une structure d'application   Oui     Oui      Correction des
                        mobile avec un écran d'accueil et un                  imports et ajout
                        écran de scan.                                        des permissions

  06/02/2025   Claude   Comment gérer l'autorisation caméra  Oui     Non      Vérification dans
                        en React Native ?                                     la documentation
                                                                              officielle

  07/02/2025   Claude   Optimise ce composant pour réduire   Oui     Oui      Ajustement manuel
                        les re-renders.                                       des optimisations

  08/02/2025   Claude   Propose un message d'erreur pour un  Oui     Non      Intégration directe
                        scan infructueux.                                     

  10/02/2025   Claude   Propose une structure de navigation  Oui     Oui      Réécriture de la
                        simple entre trois écrans.                            navigation
  -----------------------------------------------------------------------------------------------

------------------------------------------------------------------------

# Analyse détaillée des interactions clés

## Interaction #1

### Date

05/02/2025

### Outil utilisé

Claude

### Contexte

J'avais besoin d'une base structurelle pour commencer l'application
Check & Go, notamment une navigation simple et deux écrans fonctionnels.

### Prompt utilisé

    Génère une structure d’application mobile pour un projet Check & Go avec un écran d’accueil et un écran de scan.

### Résumé de la réponse IA

Claude a proposé une structure React Native utilisant React Navigation,
avec deux écrans et un exemple simple pour la navigation.

### Évaluation critique

  ------------------------------------------------------------------------
  Critère          Note /5   Commentaire
  ---------------- --------- ---------------------------------------------
  Pertinence       4         Bonne réponse globale

  Exactitude       3         Erreurs dans les imports

  Complétude       3         Absence des permissions caméra

  Clarté           5         Réponse claire et compréhensible

  Applicabilité    4         Utilisable après corrections
  ------------------------------------------------------------------------

### Erreurs ou limites identifiées

-   Information incomplète : pas de gestion des permissions caméra\
-   Code non fonctionnel : erreur d'import dans la navigation\
-   Réponse trop générique : pas adaptée au contexte Check & Go

### Vérification effectuée

-   Documentation React Navigation\
-   Documentation React Native\
-   Tests dans le projet

### Correction apportée

-   Correction des imports\
-   Ajout des permissions caméra\
-   Réorganisation de la structure des fichiers

------------------------------------------------------------------------

## Interaction #2

### Date

06/02/2025

### Contexte

Je devais comprendre comment gérer les autorisations pour accéder à la
caméra sur Android et iOS.

### Prompt utilisé

    Comment gérer l’autorisation caméra en React Native ?

### Résumé de la réponse IA

Claude a donné un exemple fonctionnel pour Android, utilisant
PermissionsAndroid.

### Évaluation et correction

-   Ajout manuel des autorisations iOS dans Info.plist\
-   Vérification via la documentation officielle de React Native

------------------------------------------------------------------------

## Interaction #3

### Date

07/02/2025

### Contexte

Optimiser le composant principal pour éviter les re-renders inutiles.

### Prompt utilisé

    Optimise ce code pour éviter les re-renders inutiles.

### Résumé de la réponse IA

Claude a recommandé d'utiliser useCallback, useMemo, et de découper
certains composants.

### Évaluation et correction

-   Certaines suggestions trop génériques\
-   Application uniquement des optimisations réellement pertinentes

------------------------------------------------------------------------

# Synthèse réflexive

## Ce que l'IA a bien fait

1.  Génération rapide de structures de code utiles\
2.  Explications claires sur certains concepts techniques\
3.  Aide à la conception initiale de l'application

## Ce que l'IA a mal fait ou n'a pas su faire

1.  Générer du code totalement fonctionnel\
2.  S'adapter aux contraintes spécifiques du projet\
3.  Gérer correctement les différences iOS / Android

## Ce que j'ai appris sur l'utilisation de l'IA

1.  Toujours vérifier les informations obtenues\
2.  L'IA n'est pas une source de vérité absolue\
3.  Le gain de temps dépend de la supervision humaine

------------------------------------------------------------------------

# Statistiques du projet

  Métrique                          Valeur
  --------------------------------- ----------
  Nombre total d'interactions IA    12
  Réponses utiles directement       7
  Réponses nécessitant correction   5
  Erreurs factuelles détectées      2
  Hallucinations détectées          1
  Temps gagné grâce à l'IA          4 heures
  Temps perdu à corriger l'IA       1 heure
  Taux de fiabilité perçu           70 %

------------------------------------------------------------------------

# Checklist de clôture

-   [x] Toutes les interactions sont documentées\
-   [x] Les erreurs IA ont été corrigées\
-   [x] Les sources ont été vérifiées\
-   [x] Le code généré a été testé\
-   [x] Aucun copier-coller aveugle\
-   [x] Tous les choix techniques peuvent être expliqués

------------------------------------------------------------------------

# Questions pour la soutenance

### 1. Comment avez-vous utilisé l'IA dans ce projet ?

L'IA m'a servi d'assistant technique pour générer du code, obtenir des
explications et accélérer certaines étapes du développement.

### 2. Quelles erreurs avez-vous détectées dans les réponses IA ?

Des erreurs d'import, des oublis sur les permissions caméra, et
plusieurs suggestions trop génériques.

### 3. Comment avez-vous vérifié les informations fournies ?

En consultant la documentation officielle, en testant directement dans
l'application et en comparant avec des sources fiables.

### 4. Qu'est-ce que l'IA n'a pas su faire ?

Adapter parfaitement les réponses au contexte du projet et produire un
code totalement fonctionnel.

### 5. Pourquoi avoir choisi votre solution plutôt que celle de l'IA ?

Parce que les solutions issues de la documentation officielle sont plus
fiables et adaptées, et ont été validées après test réel.

------------------------------------------------------------------------

# Ressources pour vérifier les informations

  Domaine                     Sources fiables
  --------------------------- ------------------------------------------
  Réglementation française    Legifrance, CNIL, ANSSI
  Réglementation européenne   EUR-Lex
  Documentation technique     Docs React Native, React Navigation, MDN
  Cybersécurité               ANSSI, OWASP, NIST
  IA et éthique               AI Act, CNIL

------------------------------------------------------------------------

# Message final

L'IA générative est un outil puissant, mais elle n'est pas infaillible.\
Votre rôle est de vérifier, corriger et valider les informations
fournies.\
L'IA assiste : vous restez le pilote.
