
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { TypePlat } from "./TypePlat";

export class Plat {
  // Relations
  public static toTypePlat;

  public static model = sequelize.getInstance().define("plat", {
    nom: { type: Sequelize.STRING(255), allowNull: false },
    description: { type: Sequelize.STRING(255), allowNull: false },
    prix: { type: Sequelize.FLOAT, allowNull: false },
    urlPhoto: { type: Sequelize.STRING(255), allowNull: false }
  });

  public static alterTable() {
    Plat.toTypePlat = Plat.model.belongsTo(TypePlat.model);
  }
}
