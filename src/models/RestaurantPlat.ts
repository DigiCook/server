
import sequelize = require("../services/sequelize");
import { Plat } from "./Plat";
import { Restaurant } from "./Restaurant";

export class RestaurantPlat {
  // Relations
  public static toRestaurant;
  public static toPlat;

  public static model = sequelize.getInstance().define("restaurant_plat", {});

  public static alterTable() {
    RestaurantPlat.toRestaurant = RestaurantPlat.model.belongsTo(Restaurant.model);
    RestaurantPlat.toPlat = RestaurantPlat.model.belongsTo(Plat.model);
  }
}
