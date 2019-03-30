
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Commande } from "./Commande";
import { Plat } from "./Plat";

export class CommandePlat {
  // Relations
  static toCommande;
  static toPlat;

  static model = sequelize.getInstance().define("commande_plat", {
    prixPlat: { type: Sequelize.FLOAT, allowNull: false }
  });

  static alterTable () {
    CommandePlat.model.belongsTo(Commande.model);
    CommandePlat.model.belongsTo(Plat.model);
  }
}