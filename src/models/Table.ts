
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Restaurant } from "./Restaurant";

export class Table {
  // Relations
  public static toRestaurant;

  public static model = sequelize.getInstance().define("table", {
    libelle: { type: Sequelize.STRING(255), allowNull: false }
  });

  public static alterTable() {
    Table.toRestaurant = Table.model.belongsTo(Restaurant.model);
  }
}
