
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const CommandePlat = sequelize.getInstance().define("CommandePlat", {
  prixPlatCommande: { type: Sequelize.FLOAT, allowNull: false }
});
