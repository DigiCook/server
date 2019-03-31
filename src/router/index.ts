import { TypePlatController } from '../controllers/TypePlatController'
import { PlatController } from '../controllers/PlatController'

export function load (app) {
  // Type PLat Routes
  app.route('/api/typeplat')
    .get(TypePlatController.getAll)

  // Plat Routes
  app.route('/api/plat')
    .get(PlatController.getAll)

  app.route('/api/note/:noteId')
    // .get(note.readNote)
    // .put(note.updateNote)
    // .delete(note.deleteNote)
}
