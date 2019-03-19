
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Plat } from "./Plat";

export const TypePlat = sequelize.getInstance().define("type_plat", {
  libelle: { type: Sequelize.STRING(255), allowNull: false }
});

export function alterTable () {
  TypePlat.Plats = TypePlat.hasMany(Plat);
}