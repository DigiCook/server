
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const Adresse = sequelize.getInstance().define("Adresse", {
  pays: { type: Sequelize.STRING(50), allowNull: false },
  ville: { type: Sequelize.STRING(50), allowNull: false },
  codePostal: { type: Sequelize.INTEGER(5), allowNull: false },
  complement: { type: Sequelize.STRING(200), allowNull: false }
});
