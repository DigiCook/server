
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { CommandePlat } from "./CommandePlat";

export const Commande = sequelize.getInstance().define("Commande", {
  libelleTable: { type: Sequelize.STRING(255), allowNull: false }
});

export function alterTable () {
  Commande.hasMany(CommandePlat);
}

