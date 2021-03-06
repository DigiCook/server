
import sequelize = require("../services/sequelize");
import { Restaurant } from "./Restaurant";
import { Plat } from "./Plat";

export class RestaurantPlat {
  // Relations
  static toRestaurant;
  static toPlat;

  static model = sequelize.getInstance().define("restaurant_plat", {});

  static alterTable () {
    RestaurantPlat.toRestaurant = RestaurantPlat.model.belongsTo(Restaurant.model);
    RestaurantPlat.toPlat = RestaurantPlat.model.belongsTo(Plat.model);
  }
}