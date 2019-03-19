
import sequelize = require("../services/sequelize");
import { Restaurant } from "./Restaurant";
import { Plat } from "./Plat";

export const RestaurantPlat = sequelize.getInstance().define("Restaurant_Plat", {});

export function alterTable () {
  RestaurantPlat.belongsTo(Restaurant);
  RestaurantPlat.belongsTo(Plat);
}