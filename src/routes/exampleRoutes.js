'use strict';

import todoList from '../controllers/exampleController';

module.exports = app => {
  // todoList Routes
  app.route('/tasks')
    .get(todoList.listAllTasks)
    .post(todoList.createTask);

    app.route('/tasks/:taskId')
    .get(todoList.readTask)
    .put(todoList.updateTask)
    .delete(todoList.deleteTask);
}
