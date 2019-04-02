
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Adresse } from "./Adresse";
import { Commande } from "./Commande";
import { Exploitation } from "./Exploitation";
import { Restaurant } from "./Restaurant";

export enum TypePersonne {
  PRODUCTEUR = "produteur",
  RESTAURATEUR = "restaurateur",
  CLIENT = "client"
}

export class Personne {
  // Repations
  public static fromCommande;
  public static toExploitation;
  public static toAdresse;
  public static toRestaurant;

  public static model = sequelize.getInstance().define("personne", {
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

  public static alterTable() {
    Personne.fromCommande = Personne.model.hasMany(Commande.model);
    Personne.toExploitation = Personne.model.belongsTo(Exploitation.model);
    Personne.toAdresse = Personne.model.belongsTo(Adresse.model);
    Personne.toRestaurant = Personne.model.belongsTo(Restaurant.model);
  }
}
