
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Exploitation } from "./Exploitation";

export class Ingredient {
  // Relations
  public static toExploitation;

  public static model = sequelize.getInstance().define("ingredient", {
    nom: { type: Sequelize.STRING(255), allowNull: false },
    description: { type: Sequelize.STRING(255), allowNull: false }
  });

  public static alterTable() {
    Ingredient.toExploitation = Ingredient.model.belongsTo(Exploitation.model);
  }
}
