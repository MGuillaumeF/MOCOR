# Stratégie de test

## Présentation général

Les fonctionnalités doivent être testées de manière suffisantes avec un objectif de couverture de code > 80%, pour se faire la planification de TDD est à mettre en place.

Les tests doivent être utile en testant des implémentations de code représentant des fonctionnalités attendu des projets, on ne test pas les petites fonctions mais les fonctions significatives (utilisant des algorithmes complexes ou faisant appelle à d’autres fonctions) 

En prenant de la hauteur on identifie le code « mort » et on peut l’éliminer rapidement 


Les fonctionnalités qui ne sont pas graphiques sont à tester avec un environnement JavaScript allégé

Les fonctionnalités graphiques sont à tester sur un résultat du code source en version de dev ou en version bundle.

Pour les interfaces complexes (notamment la partie réseaux) il est possible de fournir des utilitaires de test pour simplifier les futures tests

## Tests unitaires

### Qu'est-ce qu'on test ?

Les tests unitaires sont à réaliser sur :

- les composants graphiques
- les fonctions complexes
- les fonctions utilitaires
- les interfaces exposées

## Tests d'integration

### Qu'est-ce qu'on test ?

- les composants graphiques complexes
- les scénarios d'exemple
- les fonctionnalités liées aux protocoles de communication
 
