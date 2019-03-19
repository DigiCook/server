
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Commande } from "./Commande";
import { Menu } from "./Menu";

export const CommandeMenu = sequelize.getInstance().define("Commande_Menu", {
  prixMenu: { type: Sequelize.FLOAT, allowNull: false }
});

export function alterTable () {
  CommandeMenu.belongsTo(Commande);
  CommandeMenu.belongsTo(Menu);
}