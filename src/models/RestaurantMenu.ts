
import sequelize = require("../services/sequelize");
import { Restaurant } from "./Restaurant";
import { Menu } from "./Menu";

export class RestaurantMenu {
  // Relations
  static toResyaurant;
  static toMenu;

  static model = sequelize.getInstance().define("restaurant_menu", {});

  static alterTable () {
    RestaurantMenu.model.belongsTo(Restaurant.model);
    RestaurantMenu.model.belongsTo(Menu.model);
  }
}