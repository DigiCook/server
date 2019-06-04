import { MessageRepository } from "../repository/MessageRepository";

export class MessageController {
  public static getAll(req, res) {
    MessageRepository.getAll().then((messages) => {
      res.status(200).json({ code: 200, data: messages });
    }).catch((error) => {
      console.error("[MessageController:getAll]", error);
      res.status(400).json({ code: 400, message: "An Error occure !" });
    });
  }
}
