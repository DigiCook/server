import { Menu, MenuPlat, Plat } from "../models";

export class MenuRepository {

  public static getAll() {
    return new Promise((resolve, reject) => {
      Menu.model.findAll({
        attributes: ["id", "nom", "urlPhoto"]
      }).then((result) => {
        // If result is null or undefined, send an empty array.
        result = result ? result : [];
        console.info(`[MenuRepository:getAll] All Menu size : ${result.length}`);
        resolve(result);
      }).catch((error) => {
        console.error("[MenuRepository:getAll]", error);
        reject(error);
      });
    });
  }

  public static getById(id: number) {
    return new Promise((resolve, reject) => {
      if (id !== null && id !== undefined && !isNaN(Number(id))) {
        Menu.alterTable();
        Menu.model.findOne({
          where: { id },
          attributes: ["id", "nom", "description", "urlPhoto"],
          include: [{
            model: Plat.model,
            attributes: ["id", "nom"],
            through: {
              attributes: []
            }
          }]
        }).then((menu) => {
          if (menu) {
            console.info(`[MenuRepository:getById] Menu : ${menu.nom}`);
            resolve(menu);
          } else {
            resolve(null);
          }
        }).catch((error) => {
          console.error("[MenuRepository:getById]", error);
          reject(error);
        });
      } else {
        resolve(null);
      }
    });
  }
}
