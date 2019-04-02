import { MenuRepository } from "../repository/MenuRepository";

export class MenuController {

  static getAll (req, res) {
    MenuRepository.getAll().then(menus => {
      res.status(200).json({ code: 200, data: menus });
    }).catch(error => {
      console.error('[MenuController:getAll]', error);
      res.status(400).send('An Error occure !');
    });
  }

  static getOne (req, res) {
    const params = req.params;

    if (params && params.hasOwnProperty('menuId')) {
      MenuRepository.getById(params.menuId).then(menu => {
        res.status(200).json({ code: 200, data: menu });
      }).catch(error => {
        console.error('[MenuController:getAll]', error);
        res.status(400).send('An Error occure !');
      });
    } else {
      res.status(400).send('Attribute(s) missing !');
    }
  }
}