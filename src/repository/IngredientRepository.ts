import { Ingredient } from '../models'

export class IngredientRepository {

  static getAll () {
    return new Promise((resolve, reject) => {
      Ingredient.model.findAll().then(result => {
        console.info('[IngredientRepository:getAll] All Plat size : ', result.length);
        resolve(result);
      }).catch(error => {
        console.error('[IngredientRepository:getAll]', error);
        reject(error);
      });
    });
  }

  static getById (id: number) {
    return new Promise((resolve, reject) => {
      Ingredient.model.findOne({ where: { id } }).then(ingredient => {
        console.info('[IngredientRepository:getById] Menu : ', ingredient);
        resolve(ingredient);
      }).catch(error => {
        console.error('[IngredientRepository:getById]', error);
        reject(error);
      });
    });
  }
}