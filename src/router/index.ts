import { TypePlatController } from '../controllers/TypePlatController'

export function load (app) {
  // Note Routes
  app.route('/api/typeplat')
    .get(TypePlatController.getAll)
    // .post(note.createNote)

  app.route('/api/note/:noteId')
    // .get(note.readNote)
    // .put(note.updateNote)
    // .delete(note.deleteNote)
}
