
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");

const TypePlat = sequelize.getInstance().define("typePlat", {
  libelle: {
    type: Sequelize.STRING
  }
});

export default TypePlat;
