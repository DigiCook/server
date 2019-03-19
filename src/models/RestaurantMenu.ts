
import sequelize = require("../services/sequelize");

export const RestaurantMenu = sequelize.getInstance().define("Restaurant_Menu", {});
