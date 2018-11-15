# guide-des-aides

Définition de chaque aide dispensée par une collectivité.
L'ensemble des définitions représente son guide des aides.

## Modélisation des données

### Une aide du guide des aides

Le contrat [JSON-Schema](https://json-schema.org) d'une aide fournie par le guide des aides est disponible dans le fichier [aides](./aide-noAdditionalProperties.json).
![modèle](/aide.png "Schéma d'une aide")

### Une compétence

Le contrat [JSON-Schema](https://json-schema.org) d'une compétence déclarée dans le guide des aides est disponible dans le fichier [master-data](./master-data-record-noAdditionalProperties.json).
![modèle](/master-data-record.png "donnée liée")

### Un engagement

Le contrat [JSON-Schema](https://json-schema.org) d'un engagement déclaré par le guide des aides est disponible dans le fichier [engagement](./engagement-noAdditionalProperties.json).
![modèle](/engagement.png "Schéma d'un engagement")

### Un mot-clé

Le contrat [JSON-Schema](https://json-schema.org) d'un mot-clé déclaré par le guide des aides est disponible dans le fichier [master-data](./master-data-record-noAdditionalProperties.json).
![modèle](/master-data-record.png "donnée liée")

### Un public bénéficiaire

Le contrat [JSON-Schema](https://json-schema.org) d'un engagement déclaré par le guide des aides est disponible dans le fichier [master-data](./master-data-record-noAdditionalProperties.json).
![modèle](/master-data-record.png "donnée liée")

## Service de test du guide des aides

Pour faciliter le travailler des intégrateurs, un service mock est fourni dans [mock-service](/mock-service/README.md).

## 4. Usage de consommation de l'API

### 4.1 Créer une nouvelle aide

![Créer une aide](/flux-creer-aide-api.png "Créer une aide")

### 4.2 Lister les aides et afficher le détail d'une aide

![Consulter une aide](/flux-consommation-api.png "Récupérer une aide")