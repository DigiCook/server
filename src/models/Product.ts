
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

const Product = sequelize.getInstance().define("product", {
  name: {
    type: Sequelize.STRING
  }
});

export default Product;
