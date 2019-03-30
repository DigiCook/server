
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Commande } from "./Commande";

export enum TypePersonne {
  PRODUCTEUR = "produteur",
  RESTAURATEUR = "restaurateur",
  CLIENT = "client"
};

export class Personne{
  // Repations
  static fromCommande;

  static model = sequelize.getInstance().define("personne", {
    nom: { type: Sequelize.STRING(255), allowNull: false },
    prenom: { type: Sequelize.STRING(255), allowNull: false },
    email: { type: Sequelize.STRING(255), allowNull: false },
    telephone: { type: Sequelize.STRING(10), allowNull: false },
    typePersonne: {
      type: Sequelize.ENUM,
      values: [TypePersonne.PRODUCTEUR, TypePersonne.RESTAURATEUR, TypePersonne.CLIENT],
      defaultValue: TypePersonne.CLIENT,
      allowNull: false
    }
  });

  static alterTable () {
    Personne.model.hasMany(Commande.model);
  }
}