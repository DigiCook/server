
import sequelize = require("../services/sequelize");
import { Menu } from "./Menu";
import { Plat } from "./Plat";

export class MenuPlat {
  // Relations
  static toMenu;
  static toPlat;

  static model = sequelize.getInstance().define("menu_plat", {});

  static alterTable () {
    MenuPlat.model.belongsTo(Menu.model);
    MenuPlat.model.belongsTo(Plat.model);
  }
}