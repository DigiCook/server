
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const Product = sequelize.getInstance().define("Product", {
  name: {
    type: Sequelize.STRING
  }
});
