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

  static getOne (req, res) {
    const params = req.params;

    if (params && params.hasOwnProperty('platId')) {
      PlatRepository.getById(params.platId).then(plat => {
        res.status(200).json({ code: 200, data: plat });
      }).catch(error => {
        console.error('[MenuController:getAll]', error);
        res.status(400).send('An Error occure !');
      });
    } else {
      res.status(400).send('Attribute(s) missing !');
    }
  }
}