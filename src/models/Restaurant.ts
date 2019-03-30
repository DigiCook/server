
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Personne } from "./Personne";
import { Adresse } from "./Adresse";

export class Restaurant {
  // Relations
  static fromPersonne;
  static toAdresse;

  static model = sequelize.getInstance().define("restaurant", {
    nom: { type: Sequelize.STRING(255), allowNull: false }
  });

  static alterTable () {
    Restaurant.fromPersonne = Restaurant.model.hasMany(Personne.model);
    Restaurant.toAdresse = Restaurant.model.belongsTo(Adresse.model);
  }
}