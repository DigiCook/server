import { IngredientRepository } from "../repository/IngredientRepository";

export class IngredientController {
  static getAll (req, res) {
    IngredientRepository.getAll().then(ingredients => {
      res.status(200).json({ code: 200, data: ingredients });
    }).catch(error => {
      console.error('[IngredientController:getAll]', error);
      res.status(400).json({ code: 400, message: 'An Error occure !' });
    });
  }

  static getOne (req, res) {
    const params = req.params;

    if (params && params.hasOwnProperty('ingredientId')) {
      IngredientRepository.getById(params.ingredientId).then(ingredient => {
        if (ingredient) {
          res.status(200).json({ code: 200, data: ingredient });
        } else {
          res.status(400).json({ code: 404, message: 'Not found !' });
        }
      }).catch(error => {
        console.error('[IngredientController:getOne]', error);
        res.status(400).json({ code: 400, message: 'An Error occure !' });
      });
    } else {
      res.status(400).json({ code: 400, message: 'Attribute(s) missing !' });
    }
  }
}