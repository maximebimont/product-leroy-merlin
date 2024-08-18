# API Products - Test d'évaluation Alternance - Leroy Merlin 

> Réalisé par Maxime Bimont 

## Consigne

### Partie 1 : Backend Java (Spring Boot)

Créer une API REST simple en utilisant Spring Boot. Cette API doit permettre de gérer une liste de produits.

- Initialisation d’un projet Spring Boot : Crée un nouveau projet Spring Boot et ajoute les dépendances nécessaires pour créer une API REST, comme Spring Web.
- Modéliser l'entité Produit : Crée une classe Produit avec les attributs suivants : id, nom, et prix.
- Implémenter les endpoints REST :
  - GET /produits : Cet endpoint doit permettre de lister tous les produits par ordre alphabétique.
  - POST /produits : Cet endpoint doit permettre d'ajouter un nouveau produit.
- Ajoute des validations de base : Par exemple, veille à ce que le prix ne soit pas négatif.

### Partie 2 : Frontend Angular

Créer une application Angular pour afficher la liste de produits et permettre l'ajout de nouveaux produits.

- Initialise un projet Angular : Crée un nouveau projet Angular.
- Créer les composants nécessaires :
  - ProductListComponent : Un composant qui affiche la liste des produits.
  - ProductFormComponent : Un composant avec un formulaire permettant d'ajouter un nouveau produit.
- Créer un service Angular : Nomme-le ProductService pour gérer les interactions avec l'API REST.
- Ajoute un style de base : Rends l'application présentable avec quelques styles de base.

Un repo git sera demandé pour rendre cet exercice

## Fonctionnement

- Dans le repétoire /api -> lancer la commande `mvn spring-boot:run`
- Dans le repétoire /app -> lancer la commande `ng serve` ou `npm start`

## Informations supplémentaires

Je n'ai malheuresement pas commits avant la création du répertoire pour montrer l'avancement du projet. 

J'ai tout de fois commencé par réaliser la partie Back sur l'`IDE Eclipse`, en m'aidant d'un projet de cours sur lequel j'avais du réaliser la même tâche mais pour une pizzeria. 

Ensuite pour la partie Front, j'ai repris des éléments de mon projet d'alternance de cette année pour faire réaliser le développement sur Angular, par exemple en reprenant l'architecture modulaire ainsi que l'utilisation d'éléments de la bibliothèque de `material`