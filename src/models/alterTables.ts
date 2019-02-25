import { 
  TypePlat,
  Plat
} from "../models";

export function execute () {
  TypePlat.hasMany(Plat);
}
