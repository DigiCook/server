
import sequelize = require("../services/sequelize");
import { Restaurant } from "./Restaurant";
import { Menu } from "./Menu";

export class RestaurantMenu {
  // Relations
  static toRestaurant;
  static toMenu;

  static model = sequelize.getInstance().define("restaurant_menu", {});

  static alterTable () {
    RestaurantMenu.toRestaurant = RestaurantMenu.model.belongsTo(Restaurant.model);
    RestaurantMenu.toMenu = RestaurantMenu.model.belongsTo(Menu.model);
  }
}