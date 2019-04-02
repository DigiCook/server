import { TypePlat } from '../models'

export class TypePlatRepository {

  static getAll () {
    return new Promise((resolve, reject) => {
      TypePlat.model.findAll({
        attributes: ['id', 'libelle']
      }).then(result => {
        // If result is null or undefined, send an empty array.
        result = result ? result : [];
        console.info(`[TypePlatRepository:getAll] Type Plat size : ${result.length}`);
        resolve(result);
      }).catch(error => {
        console.error('[TypePlatRepository:getAll]', error);
        reject(error);
      });
    });
  }
}