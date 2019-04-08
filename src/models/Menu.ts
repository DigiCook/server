
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { MenuPlat } from "./MenuPlat";
import { Plat } from "./Plat";

export class Menu {
  // Relations
  public static toPlat;

  public static model = sequelize.getInstance().define("menu", {
    nom: { type: Sequelize.STRING(255), allowNull: false },
    description: { type: Sequelize.STRING(255), allowNull: false },
    prix: { type: Sequelize.FLOAT, allowNull: false },
    urlPhoto: { type: Sequelize.STRING(255), allowNull: false }
  });

  public static alterTable() {
    Menu.toPlat = Menu.model.belongsToMany(Plat.model, { through: { model: MenuPlat.model, unique: false }, foreignKey: "menuId" });
  }
}
