
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Personne } from "./Personne";
import { Exploitation } from "./Exploitation";
import { Restaurant } from "./Restaurant";

export const Adresse = sequelize.getInstance().define("Adresse", {
  pays: { type: Sequelize.STRING(50), allowNull: false },
  ville: { type: Sequelize.STRING(50), allowNull: false },
  codePostal: { type: Sequelize.INTEGER, allowNull: false },
  complement: { type: Sequelize.STRING(200), allowNull: false }
});

export function alterTable () {
  Adresse.hasMany(Personne);
  Adresse.hasMany(Exploitation);
  Adresse.hasMany(Restaurant);
}