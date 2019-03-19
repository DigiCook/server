
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const Menu = sequelize.getInstance().define("Menu", {
  nom: { type: Sequelize.STRING(255), allowNull: false },
  description: { type: Sequelize.STRING(255), allowNull: false },
  urlPhoto: { type: Sequelize.STRING(255), allowNull: false }
});
