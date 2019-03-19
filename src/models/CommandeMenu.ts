
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const CommandeMenu = sequelize.getInstance().define("Commande_Menu", {
  prixMenu: { type: Sequelize.FLOAT, allowNull: false }
});
