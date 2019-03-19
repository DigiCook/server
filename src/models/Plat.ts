
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { TypePlat } from "./TypePlat";

export const Plat = sequelize.getInstance().define("plat", {
  nom: { type: Sequelize.STRING(255), allowNull: false },
  description: { type: Sequelize.STRING(255), allowNull: false },
  prix: { type: Sequelize.FLOAT, allowNull: false },
  urlPhoto: { type: Sequelize.STRING(255), allowNull: false }
});

export function alterTable () {
  return {
    Plat_TypePlat: Plat.belongsTo(TypePlat)
  }
}