import { PlatRepository } from "../repository/PlatRepository";

export class PlatController {
  static getAll (req, res) {
    PlatRepository.getAll().then(plats => {
      res.status(200).json({ code: 200, data: plats });
    }).catch(error => {
      console.error('[PlatController:getAll]', error);
      res.status(400).send('An Error occure !');
    });
  }
}