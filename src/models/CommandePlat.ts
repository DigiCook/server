
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Commande } from "./Commande";
import { Plat } from "./Plat";

export const CommandePlat = sequelize.getInstance().define("Commande_Plat", {
  prixPlat: { type: Sequelize.FLOAT, allowNull: false }
});

export function alterTable () {
  CommandePlat.belongsTo(Commande);
  CommandePlat.belongsTo(Plat);
}