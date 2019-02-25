
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const Commande = sequelize.getInstance().define("Commande", {
  libelleTable: { type: Sequelize.STRING(50), allowNull: false }
});

