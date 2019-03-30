
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export class Ingredient {
  static model = sequelize.getInstance().define("ingredient", {
    nom: { type: Sequelize.STRING(255), allowNull: false },
    description: { type: Sequelize.STRING(255), allowNull: false }
  });
}