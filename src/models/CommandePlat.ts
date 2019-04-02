
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Commande } from "./Commande";
import { Plat } from "./Plat";

export class CommandePlat {
  // Relations
  public static toCommande;
  public static toPlat;

  public static model = sequelize.getInstance().define("commande_plat", {
    prixPlat: { type: Sequelize.FLOAT, allowNull: false }
  });

  public static alterTable() {
    CommandePlat.toCommande = CommandePlat.model.belongsTo(Commande.model);
    CommandePlat.toPlat = CommandePlat.model.belongsTo(Plat.model);
  }
}
