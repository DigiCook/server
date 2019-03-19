
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Plat } from "./Plat";

export const TypePlat = sequelize.getInstance().define("TypePlat", {
  libelle: { type: Sequelize.STRING(50), allowNull: false }
});

export function alterTable () {
  TypePlat.hasMany(Plat);
}