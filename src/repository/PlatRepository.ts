import { Plat } from '../models'

export class PlatRepository {

  static getAll () {
    return new Promise((resolve, reject) => {
      Plat.model.findAll().then(result => {
        console.info('[PlatRepository:getAll] All Plat size : ', result.length)
        resolve(result);
      }).catch(error => {
        console.error('[PlatRepository:getAll]', error);
        reject(error);
      });
    });
  }
}