
import sequelize = require("../services/sequelize");
import { Ingredient } from "./Ingredient";
import { Plat } from "./Plat";

export class PlatIngredient {
  // Relations
  public static toIngredient;
  public static toPlat;

  public static model = sequelize.getInstance().define("plat_ingredient", {});

  public static alterTable() {
    PlatIngredient.toIngredient = PlatIngredient.model.belongsTo(Ingredient.model);
    PlatIngredient.toPlat = PlatIngredient.model.belongsTo(Plat.model);
  }
}
