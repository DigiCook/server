
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

export const model = sequelize.getInstance().define("product", {
  name: {
    type: Sequelize.STRING
  }
});
