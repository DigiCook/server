
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export class Menu {
  static model = sequelize.getInstance().define("menu", {
    nom: { type: Sequelize.STRING(255), allowNull: false },
    description: { type: Sequelize.STRING(255), allowNull: false },
    urlPhoto: { type: Sequelize.STRING(255), allowNull: false }
  });
}
