import { TypePlat } from "../models"

export function list (req, res) {
  TypePlat.findAll().then(typePlats => {
    res.status(200).json({ code: 200, data: typePlats });
  }).catch(error => {
    console.error('[TypePlatController:list]', error);
    res.status(400).send('An Error occure !');
  })
}