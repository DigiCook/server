import { Message, Table } from "../models";

export class MessageRepository {

  public static getAll() {
    return new Promise((resolve, reject) => {
      Message.alterTable();
      Table.alterTable();

      Message.model.findAll({
        attributes: ["id", "message", "createdAt"],
        include: [{
          model: Table.model,
          attributes: ["id", "libelle"]
        }]
      }).then((result) => {
        // If result is null or undefined, send an empty array.
        result = result ? result : [];
        console.info(`[MessageRepository:getAll] Type Plat size : ${result.length}`);
        resolve(result);
      }).catch((error) => {
        console.error("[v:getAll]", error);
        reject(error);
      });
    });
  }

  public static create(message: ICreateMessageBody) {
    return new Promise((resolve, reject) => {
      console.info(`[MessageRepository:create] tableId ${message.tableId} message: ${message.message}`);
      Message.alterTable();

      Message.model.create(message, {
        include: [
          { association: Message.toTable }
        ]
      }).then((result) => {
        console.info(`[MessageRepository:create] Message created ${result.id} - ${result.message}`);
        Message.model.findAll({
          where: { id: result.id },
          attributes: ["id", "message", "createdAt"],
          include: [{
            model: Table.model,
            attributes: ["id", "libelle"]
          }]
        }).then((fullMessage) => {
          resolve(fullMessage);
        }).catch((error) => {
          console.error("[MessageRepository:create]", error);
          reject(error);
        });
      }).catch((error) => {
        console.error("[MessageRepository:create]", error);
        reject(error);
      });
    });
  }
}

export interface ICreateMessageBody {
  message: string;
  tableId: number;
}
