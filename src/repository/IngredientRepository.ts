import { Ingredient } from '../models'

export class IngredientRepository {

  static getAll () {
    return new Promise((resolve, reject) => {
      Ingredient.model.findAll().then(result => {
        // If result is null or undefined, send an empty array.
        result = result ? result : [];
        console.info(`[IngredientRepository:getAll] All Plat size : ${result.length}`);
        resolve(result);
      }).catch(error => {
        console.error('[IngredientRepository:getAll]', error);
        reject(error);
      });
    });
  }

  static getById (id: number) {
    return new Promise((resolve, reject) => {
      if (id !== null && id !== undefined && !isNaN(Number(id))) {
        Ingredient.model.findOne({ where: { id } }).then(ingredient => {
          if (ingredient) {
            console.info(`[IngredientRepository:getById] Ingredient : ${ingredient.nom}`);
            resolve(ingredient);
          } else {
            resolve(null);
          }
        }).catch(error => {
          console.error('[IngredientRepository:getById]', error);
          reject(error);
        });
      } else {
        resolve(null);
      }
    });
  }
}