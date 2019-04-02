import { MenuRepository } from "../repository/MenuRepository";

export class MenuController {

  static getAll (req, res) {
    MenuRepository.getAll().then(menus => {
      res.status(200).json({ code: 200, data: menus });
    }).catch(error => {
      console.error('[MenuController:getAll]', error);
      res.status(400).json({ code: 400, message: 'An Error occure !' });
    });
  }

  static getOne (req, res) {
    const params = req.params;

    if (params && params.hasOwnProperty('menuId')) {
      MenuRepository.getById(params.menuId).then(menu => {
        if (menu) {
          res.status(200).json({ code: 200, data: menu });
        } else {
          res.status(400).json({ code: 404, message: 'Not found !' });
        }
      }).catch(error => {
        console.error('[MenuController:getOne]', error);
        res.status(400).json({ code: 400, message: 'An Error occure !' });
      });
    } else {
      res.status(400).json({ code: 400, message: 'Attribute(s) missing !' });
    }
  }
}