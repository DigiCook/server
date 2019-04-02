import { IngredientRepository } from "../repository/IngredientRepository";

export class IngredientController {
  static getAll (req, res) {
    IngredientRepository.getAll().then(ingredients => {
      res.status(200).json({ code: 200, data: ingredients });
    }).catch(error => {
      console.error('[IngredientController:getAll]', error);
      res.status(400).send('An Error occure !');
    });
  }

  static getOne (req, res) {
    const params = req.params;

    if (params && params.hasOwnProperty('ingredientId')) {
      IngredientRepository.getById(params.ingredientId).then(ingredient => {
        res.status(200).json({ code: 200, data: ingredient });
      }).catch(error => {
        console.error('[IngredientController:getOne]', error);
        res.status(400).send('An Error occure !');
      });
    } else {
      res.status(400).send('Attribute(s) missing !');
    }
  }
}