
import sequelize = require("../services/sequelize");
import { Ingredient } from "./Ingredient";
import { Plat } from "./Plat";

export class PlatIngredient {
  // Relations
  static toIngredient;
  static toPlat;

  static model = sequelize.getInstance().define("plat_ingredient", {});

  static alterTable () {
    PlatIngredient.toIngredient = PlatIngredient.model.belongsTo(Ingredient.model);
    PlatIngredient.toPlat = PlatIngredient.model.belongsTo(Plat.model);
  }
}