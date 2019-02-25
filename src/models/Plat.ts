
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { CommandePlat } from "./CommandePlat";

export const Plat = sequelize.getInstance().define("Plat", {
  nom: { type: Sequelize.STRING(50), allowNull: false },
  description: { type: Sequelize.STRING(200), allowNull: false },
  prix: { type: Sequelize.FLOAT, allowNull: false },
  urlPhoto: { type: Sequelize.STRING(50), allowNull: false }
});

Plat.hasMany(CommandePlat);
