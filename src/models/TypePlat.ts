
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const model = sequelize.getInstance().define("typePlat", {
  libelle: { type: Sequelize.STRING(50), allowNull: false }
});
