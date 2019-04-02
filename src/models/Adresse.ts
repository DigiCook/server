
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Exploitation } from "./Exploitation";
import { Personne } from "./Personne";
import { Restaurant } from "./Restaurant";

export class Adresse {
  // Relations
  public static formPersonne;
  public static formExploitation;
  public static formRestaurant;

  public static model = sequelize.getInstance().define("adresse", {
    pays: { type: Sequelize.STRING(255), allowNull: false },
    ville: { type: Sequelize.STRING(255), allowNull: false },
    codePostal: { type: Sequelize.INTEGER, allowNull: false },
    complement: { type: Sequelize.STRING(255), allowNull: false }
  });

  public static alterTable() {
    Adresse.formPersonne = Adresse.model.hasMany(Personne.model);
    Adresse.formExploitation = Adresse.model.hasMany(Exploitation.model);
    Adresse.formRestaurant = Adresse.model.hasMany(Restaurant.model);
  }
}
