
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const Commande = sequelize.getInstance().define("Commande", {
  libelleTable: { type: Sequelize.STRING(255), allowNull: false }
});


