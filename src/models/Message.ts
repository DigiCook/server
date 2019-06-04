
import Sequelize = require("sequelize");
import sequelize = require("../services/sequelize");
import { Table } from "./Table";

export class Message {
  // Relations
  public static toTable;

  public static model = sequelize.getInstance().define("message", {
    message: { type: Sequelize.TEXT, allowNull: false }
  });

  public static alterTable() {
    Message.toTable = Message.model.belongsTo(Table.model);
  }
}
