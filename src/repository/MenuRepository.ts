import { Menu } from '../models'

export class MenuRepository {

  static getAll () {
    return new Promise((resolve, reject) => {
      Menu.model.findAll().then(result => {
        console.info(`[MenuRepository:getAll] All Menu size : ${result.length}`);
        resolve(result);
      }).catch(error => {
        console.error('[MenuRepository:getAll]', error);
        reject(error);
      });
    });
  }

  static getById (id: number) {
    return new Promise((resolve, reject) => {
      Menu.model.findOne({ where: { id } }).then(menu => {
        console.info('[MenuRepository:getById] Menu : ', menu);
        resolve(menu);
      }).catch(error => {
        console.error('[MenuRepository:getById]', error);
        reject(error);
      });
    })
  }
}