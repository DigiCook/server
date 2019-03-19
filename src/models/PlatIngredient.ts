
import sequelize = require("../services/sequelize");
import { Ingredient } from "./Ingredient";
import { Plat } from "./Plat";

export const PlatIngredient = sequelize.getInstance().define("Plat_Ingredient", {});

export function alterTable () {
  PlatIngredient.belongsTo(Ingredient);
  PlatIngredient.belongsTo(Plat);
}