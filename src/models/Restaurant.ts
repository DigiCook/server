
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Personne } from "./Personne";

export const Restaurant = sequelize.getInstance().define("Restaurant", {
  nom: { type: Sequelize.STRING(255), allowNull: false }
});

export function alterTable () {
  Restaurant.hasMany(Personne);
}
