import { PlatRepository } from "../repository/PlatRepository";

export class PlatController {
  public static getAll(req, res) {
    PlatRepository.getAll().then((plats) => {
      res.status(200).json({ code: 200, data: plats });
    }).catch((error) => {
      console.error("[PlatController:getAll]", error);
      res.status(400).json({ code: 400, message: "An Error occure !" });
    });
  }

  public static getOne(req, res) {
    const params = req.params;

    if (params && params.hasOwnProperty("platId")) {
      PlatRepository.getById(params.platId).then((plat) => {
        if (plat) {
          res.status(200).json({ code: 200, data: plat });
        } else {
          res.status(400).json({ code: 404, message: "Not found !" });
        }
      }).catch((error) => {
        console.error("[PlatController:getOne]", error);
        res.status(400).json({ code: 400, message: "An Error occure !" });
      });
    } else {
      res.status(400).json({ code: 400, message: "Attribute(s) missing !" });
    }
  }
}
