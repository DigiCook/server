
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const model = sequelize.getInstance().define("TypePlat", {
  libelle: { type: Sequelize.STRING(50), allowNull: false }
});
