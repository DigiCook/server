
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const CommandePlat = sequelize.getInstance().define("Commande_Plat", {
  prixPlat: { type: Sequelize.FLOAT, allowNull: false }
});
