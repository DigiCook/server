'use strict';

import Sequelize from 'sequelize';

let instance = null;

class Db {
  constructor () {
    this.sequelize = new Sequelize('digiCook', 'postgres', 'postgres', {
      host: 'localhost',
      dialect: 'postgres',
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
  }
}

export default {
  getInstance () {
    if (instance === null) {
      instance = new Db();

      instance.sequelize.authenticate().then(() => {
        console.info('Connection has been established successfully.');
      }).catch(error => {
        console.error('Unable to connect to the database:', error);
      })
    }

    return instance.sequelize;
  }
}
