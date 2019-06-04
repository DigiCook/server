import { ExploitationController } from "../controllers/ExploitationController";
import { IngredientController } from "../controllers/IngredientController";
import { MenuController } from "../controllers/MenuController";
import { MessageController } from "../controllers/MessageController";
import { PlatController } from "../controllers/PlatController";
import { TypePlatController } from "../controllers/TypePlatController";

export function load(app) {
  // Type PLat Routes
  app.route("/api/typeplat")
    .get(TypePlatController.getAll);

  // Plat Routes
  app.route("/api/plat")
    .get(PlatController.getAll);
  app.route("/api/plat/:platId")
    .get(PlatController.getOne);
  app.route("/api/plat/bytype/:typePlatId")
    .get(PlatController.getByTypePlatId);

  // Menu Routes
  app.route("/api/menu")
    .get(MenuController.getAll);
  app.route("/api/menu/:menuId")
    .get(MenuController.getOne);

  // Exploitation Routes
  app.route("/api/exploitation")
    .get(ExploitationController.getAll);
  app.route("/api/exploitation/:exploitationId")
    .get(ExploitationController.getOne);

  // Ingredient Routes
  app.route("/api/ingredient")
    .get(IngredientController.getAll);
  app.route("/api/ingredient/:ingredientId")
    .get(IngredientController.getOne);

  // Messages Routes
  app.route("/api/messages")
    .get(MessageController.getAll)
}
