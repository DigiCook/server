
import sequelize = require("../services/sequelize");
import { Menu } from "./Menu";
import { Restaurant } from "./Restaurant";

export class RestaurantMenu {
  // Relations
  public static toRestaurant;
  public static toMenu;

  public static model = sequelize.getInstance().define("restaurant_menu", {});

  public static alterTable() {
    RestaurantMenu.toRestaurant = RestaurantMenu.model.belongsTo(Restaurant.model);
    RestaurantMenu.toMenu = RestaurantMenu.model.belongsTo(Menu.model);
  }
}
