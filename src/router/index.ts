import { TypePlatController } from '../controllers/TypePlatController'
import { PlatController } from '../controllers/PlatController'
import { MenuController } from '../controllers/MenuController'

export function load (app) {
  // Type PLat Routes
  app.route('/api/typeplat')
    .get(TypePlatController.getAll)

  // Plat Routes
  app.route('/api/plat')
    .get(PlatController.getAll)
  app.route('/api/plat/:platId')
    .get(PlatController.getOne)
    

  // Menu Routes
  app.route('/api/menu')
    .get(MenuController.getAll)
  app.route('/api/menu/:menuId')
    .get(MenuController.getOne)
  

  app.route('/api/note/:noteId')
    // .get(note.readNote)
    // .put(note.updateNote)
    // .delete(note.deleteNote)
}
