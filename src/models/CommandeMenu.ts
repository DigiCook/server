
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Commande } from "./Commande";
import { Menu } from "./Menu";

export class CommandeMenu {
  // Relations
  public static toCommande;
  public static toMenu;

  public static model = sequelize.getInstance().define("commande_menu", {
    prixMenu: { type: Sequelize.FLOAT, allowNull: false }
  });

  public static alterTable() {
    CommandeMenu.toCommande = CommandeMenu.model.belongsTo(Commande.model);
    CommandeMenu.toMenu = CommandeMenu.model.belongsTo(Menu.model);
  }
}
