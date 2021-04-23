# Stratégie de log

## Exigences

Les logger doivent remplir la liste d’obligations suivante :

- Le logger doit être extensible
- Le logger doit fournir des appenders en quantité suffisante
- Le logger doit fournir un parser générique extensible
- Le logger doit être configurable

## Composition des logs

Le format de log générique est le suivant :

1. La date : `YYYY-MM-DD hh:mm:ss.mmm`
2. Le niveau du log : `DEBUG`, `INFO`, `WARN`, `ERROR`, `FATAL`
3. Le nom du thème (nom de script/nom de fonction)
4. Le protocole : `[HTTP]`, `[TCP]`, `[SMTP]`, `[IO]`, `[PROCESS]`
5. Le message : format libre mais mono ligne

> Si le log est de niveau `FATAL` le process doit quitter avec un code d'erreur
