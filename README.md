# MOCOR

_Modules Optimisées de Conception Orientés React_

## Présentation

### Objectifs

Le rôle de MOCOR est de permettre la réalisation d’une application web rapidement et de façon fiable, ce mini Framework se décompose en différents modules pour permettre de limiter les imports aux besoins des créations, la partie graphique aura un thème souple pouvant être surchargé pour les couleurs, les tailles et la police

### Composition

#### MOCOR-UI-SEMANTICS

Les composants graphiques React correspondants aux spécifications HTML5

#### MOCOR-UI-CHART

Les composants graphiques React pour la réalisation de graphique

#### MOCOR-UI-EXT

Les composants graphiques React complexes

#### MOCOR-NET

Les communications sont encapsulées dans des fonctions utilitaires relatives aux différents protocoles de communication, les implémentations natives sont préférées, cependant dans la première mouture du framework, il s’agit principalement de surcouche à des COTS existants

#### MOCOR-STORE

Les API relatives aux stockages des donnés et à leurs accès et synchronisation client/server

#### MOCOR-UTILS

Les API pour les fonctions utilitaires, pour les formatages, les traductions et les loggers
