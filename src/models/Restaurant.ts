
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Personne } from "./Personne";

export class Restaurant {
  // Relations
  static fromPersonne;

  static model = sequelize.getInstance().define("restaurant", {
    nom: { type: Sequelize.STRING(255), allowNull: false }
  });

  static alterTable () {
    Restaurant.model.hasMany(Personne.model);
  }
}