import { ICreateMessageBody, MessageRepository } from "../repository/MessageRepository";

export class MessageController {

  public static getAll(req, res) {
    MessageRepository.getAll().then((messages) => {
      res.status(200).json({ code: 200, data: messages });
    }).catch((error) => {
      console.error("[MessageController:getAll]", error);
      res.status(400).json({ code: 400, message: "An Error occure !" });
    });
  }

  public static create(req, res) {
    const body: any = req.body;

    if (body && body.hasOwnProperty("message") && body.hasOwnProperty("tableId")) {
      const payload: ICreateMessageBody = {
        message: body.message,
        tableId: body.tableId
      };

      MessageRepository.create(payload).then(() => {
        res.status(200).json({ code: 200, message: "Message created" });
      }).catch((error) => {
        console.error("[MessageController:create]", error);
        res.status(400).json({ code: 400, message: "An Error occure !" });
      });
    }
  }
}
