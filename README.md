# Service guide-des-aides

Définition de chaque aide dispensée par une collectivité.
L'ensemble des définitions représente son guide des aides.

## Modélisation des données

Une fiche d'aide contient de multiple attributs comme son titre ou sa description. Mais elle peut aussi être composée de données liées comme une liste de compétences. Les différents type de données liées sont :
 * des mots-clés
 * des compétences
 * des publics de bénéficiaires
 * des engagements

Le détail de la modélisation de ces données est disponible dans [model.md](/MODEL.md).

## Visualisation de l'API

Vous pouvez consulter l'API disponible dans ce service en vous rendant sur [swagger-UI](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/MGDIS/guide-des-aides/master/mock-service/api/swagger/swagger.yaml).

## Exemples d'usage de l'API

Le guide-des-aides permet de lister les fiches d'aides disponibles et de consulter le détail de chacune.
Deux scénarii de consommation sont schématisés dans [usage.md](/USAGE.md).

 * La création d'une nouvelle fiche d'aide
 * La consultation d'une fichie d'aide

## Service de test du guide des aides

Pour faciliter le travailler des intégrateurs, un service mock est fourni dans [mock-service](/mock-service/README.md).
