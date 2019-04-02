import { Menu } from '../models'

export class MenuRepository {

  static getAll () {
    return new Promise((resolve, reject) => {
      Menu.model.findAll().then(result => {
        // If result is null or undefined, send an empty array.
        result = result ? result : [];
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
      if (id !== null && id !== undefined) {
        Menu.model.findOne({ where: { id } }).then(menu => {
          if (menu) {
            console.info(`[MenuRepository:getById] Menu : ${menu.nom}`);
            resolve(menu);
          } else {
            resolve(null);
          }
        }).catch(error => {
          console.error('[MenuRepository:getById]', error);
          reject(error);
        });
      } else {
        resolve(null);
      }
    });
  }
}