
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export class Commande {
  static model = sequelize.getInstance().define("commande", {
    libelle: { type: Sequelize.STRING(255), allowNull: false }
  });
} 

