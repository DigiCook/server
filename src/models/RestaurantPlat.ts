
import sequelize = require("../services/sequelize");
import { Restaurant } from "./Restaurant";
import { Plat } from "./Plat";

export class RestaurantPlat {
  // Relations
  static toRestaurant;
  static toPlat;

  static model = sequelize.getInstance().define("restaurant_plat", {});

  static alterTable () {
    RestaurantPlat.model.belongsTo(Restaurant.model);
    RestaurantPlat.model.belongsTo(Plat.model);
  }
}