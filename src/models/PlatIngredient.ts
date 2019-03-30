
import sequelize = require("../services/sequelize");
import { Ingredient } from "./Ingredient";
import { Plat } from "./Plat";

export class PlatIngredient {
  // Relations
  static toIngredient;
  static toPlat;

  static model = sequelize.getInstance().define("plat_ingredient", {});

  static alterTable () {
    PlatIngredient.model.belongsTo(Ingredient.model);
    PlatIngredient.model.belongsTo(Plat.model);
  }
}