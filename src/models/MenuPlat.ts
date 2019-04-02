
import sequelize = require("../services/sequelize");
import { Menu } from "./Menu";
import { Plat } from "./Plat";

export class MenuPlat {
  // Relations
  public static toMenu;
  public static toPlat;

  public static model = sequelize.getInstance().define("menu_plat", {});

  public static alterTable() {
    MenuPlat.toMenu = MenuPlat.model.belongsTo(Menu.model);
    MenuPlat.toPlat = MenuPlat.model.belongsTo(Plat.model);
  }
}
