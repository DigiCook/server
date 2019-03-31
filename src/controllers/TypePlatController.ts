import { TypePlatRepository } from "../repository/TypePlatRepository";

export class TypePlatController {
  static getAll (req, res) {
    TypePlatRepository.getAll().then(typePlats => {
      res.status(200).json({ code: 200, data: typePlats });
    }).catch(error => {
      console.error('[TypePlatController:getAll]', error);
      res.status(400).send('An Error occure !');
    });
  }
}