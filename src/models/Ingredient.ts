
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const Ingredient = sequelize.getInstance().define("Ingredient", {
  nom: { type: Sequelize.STRING(255), allowNull: false },
  description: { type: Sequelize.STRING(255), allowNull: false }
});
