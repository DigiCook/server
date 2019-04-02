
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Adresse } from "./Adresse";
import { Personne } from "./Personne";

export class Restaurant {
  // Relations
  public static fromPersonne;
  public static toAdresse;

  public static model = sequelize.getInstance().define("restaurant", {
    nom: { type: Sequelize.STRING(255), allowNull: false }
  });

  public static alterTable() {
    Restaurant.fromPersonne = Restaurant.model.hasMany(Personne.model);
    Restaurant.toAdresse = Restaurant.model.belongsTo(Adresse.model);
  }
}
