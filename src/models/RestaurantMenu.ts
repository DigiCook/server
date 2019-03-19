
import sequelize = require("../services/sequelize");
import { Restaurant } from "./Restaurant";
import { Menu } from "./Menu";

export const RestaurantMenu = sequelize.getInstance().define("Restaurant_Menu", {});

export function alterTable () {
  RestaurantMenu.belongsTo(Restaurant);
  RestaurantMenu.belongsTo(Menu);
}