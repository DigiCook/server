
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export class Commande {
  static model = sequelize.getInstance().define("commande", {
    libelleTable: { type: Sequelize.STRING(255), allowNull: false }
  });
} 

