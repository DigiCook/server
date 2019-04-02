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

  static getById (id: number) {
    return new Promise((resolve, reject) => {
      Plat.model.findOne({ where: { id } }).then(plat => {
        console.info('[PlatRepository:getById] Menu : ', plat);
        resolve(plat);
      }).catch(error => {
        console.error('[PlatRepository:getById]', error);
        reject(error);
      });
    })
  }
}