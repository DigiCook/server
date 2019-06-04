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
        console.info(`[TypePlatRepository:getAll] Type Plat size : ${result.length}`);
        resolve(result);
      }).catch((error) => {
        console.error("[TypePlatRepository:getAll]", error);
        reject(error);
      });
    });
  }
}
