
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const CommandePlat = sequelize.getInstance().define("Commande_Plat", {
  prixPlatCommande: { type: Sequelize.FLOAT, allowNull: false }
});
