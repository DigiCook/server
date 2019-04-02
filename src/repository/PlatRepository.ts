import { Plat } from '../models'

export class PlatRepository {

  static getAll () {
    return new Promise((resolve, reject) => {
      Plat.model.findAll({
        attributes: ['id', 'nom', 'prix']
      }).then(result => {
        // If result is null or undefined, send an empty array.
        result = result ? result : [];
        console.info(`[PlatRepository:getAll] All Plat size : ${result.length}`);
        resolve(result);
      }).catch(error => {
        console.error('[PlatRepository:getAll]', error);
        reject(error);
      });
    });
  }

  static getById (id: number) {
    return new Promise((resolve, reject) => {
      if (id !== null && id !== undefined && !isNaN(Number(id))) {
        Plat.model.findOne({ where: { id } }).then(plat => {
          if (plat) {
            console.info(`[PlatRepository:getById] Plat : ${plat.nom}`);
            resolve(plat);
          } else {
            resolve(null);
          }
        }).catch(error => {
          console.error('[PlatRepository:getById]', error);
          reject(error);
        });
      } else {
        resolve(null);
      }
    });
  }
}