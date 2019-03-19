
import sequelize = require("../services/sequelize");
import { Menu } from "./Menu";
import { Plat } from "./Plat";

export const MenuPlat = sequelize.getInstance().define("Menu_Plat", {});

export function alterTable () {
  MenuPlat.belongsTo(Menu);
  MenuPlat.belongsTo(Plat);
}