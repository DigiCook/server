import { Plat } from "../models";
import { TypePlat } from "../models/TypePlat";

export class PlatRepository {

  public static getAll() {
    return new Promise((resolve, reject) => {
      Plat.model.findAll({
        attributes: ["id", "nom", "prix"]
      }).then((result) => {
        // If result is null or undefined, send an empty array.
        result = result ? result : [];
        console.info(`[PlatRepository:getAll] All Plat size : ${result.length}`);
        resolve(result);
      }).catch((error) => {
        console.error("[PlatRepository:getAll]", error);
        reject(error);
      });
    });
  }

  public static getById(id: number) {
    return new Promise((resolve, reject) => {
      if (id !== null && id !== undefined && !isNaN(Number(id))) {
        Plat.alterTable();
        TypePlat.alterTable();
        Plat.model.findOne({
          where: { id },
          attributes: ["id", "nom", "description", "prix", "urlPhoto"],
          include: [{
            model: TypePlat.model,
            attributes: ["id", "libelle"]
          }]
        }).then((plat) => {
          if (plat) {
            console.info(`[PlatRepository:getById] Plat : ${plat.nom}`);
            resolve(plat);
          } else {
            resolve(null);
          }
        }).catch((error) => {
          console.error("[PlatRepository:getById]", error);
          reject(error);
        });
      } else {
        resolve(null);
      }
    });
  }

  public static getByTypePlatId(id: number) {
    return new Promise((resolve, reject) => {
      if (id !== null && id !== undefined && !isNaN(Number(id))) {
        Plat.model.findAll({
          where: { typePlatId: id },
          attributes: ["id", "nom", "prix", "urlPhoto"]
        }).then((result) => {
          // If result is null or undefined, send an empty array.
          result = result ? result : [];
          console.info(`[PlatRepository:getAll] All Plat size : ${result.length} with typePlatId ${id}`);
          resolve(result);
        }).catch((error) => {
          console.error("[PlatRepository:getAll]", error);
          reject(error);
        });
      } else {
        resolve(null);
      }
    });
  }
}
