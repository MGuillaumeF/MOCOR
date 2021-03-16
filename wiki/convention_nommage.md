# Convention de nommage

## Convention de composition

Les fichiers, les variables, méthodes, classes, interfaces ne doivent pas contenir :
  - d’accent
  - d’espace
  - de caractère spéciaux

Les variables, méthodes, classes, interfaces doivent commencer par une lettre.

### Les préfix

  - _ avec un underscore on déclare que l’attribue ou la fonction ne doit pas être utilisée.
  - E avec un « E » majuscule devant le nom des énumérés
  - I avec un « I » majuscule devant le nom des interfaces

### Les suffixes

_sans objet_

### Les extensions

  - pour les images on privilégie les .svg et les .png
  - pour les fichiers HTML on utilise uniquement.html et non pas .htm
  - pour les fichiers de style on privilégie les .scss
  - pour les fichiers TypeScript on utilise l’extension .tsx pour les fichiers contenant de la notation TSX, sinon .ts
  - pour les fichiers markdown on utilise l’extension .md 

> On n’utilise pas de JavaScript sauf pour les configurations ne supportant pas le TypeScript

## Convention de casse

### Snake case

Les fichiers ressources (png, svg, pdf, json, etc...)

### Screaming snake case

- Les constantes de configuration 
- Les constantes exportées
- Les clés de traduction
- Les énumérer 

### Camel case
- Les variables
- Les fonctions 


### Upper camel case

- Les fichiers des classes
- Les classes
- Les composants React


### Cas particuliers


Si possible éviter les majuscules pour les noms des fichiers (sauf quand le nom du fichier reprend le nom de son contenu)

Les fichiers de police de caractère suive le nom de la police avec son style et sa graisse,

Exemple : pour une police « Nunito Sans » en italique avec une graisse de 300 donnerait Nunito-Sans_Italic_Light.svg
