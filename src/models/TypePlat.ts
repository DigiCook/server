
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Plat } from "./Plat";

export class TypePlat {
  // Relations
  static fromPlat;

  static model = sequelize.getInstance().define("type_plat", {
    libelle: { type: Sequelize.STRING(255), allowNull: false }
  });

  static alterTable () {
    TypePlat.fromPlat = TypePlat.model.hasMany(Plat.model);
  }
}