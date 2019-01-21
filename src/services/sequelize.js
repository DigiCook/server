'use strict';

import Sequelize from 'sequelize';

let instance = null;

class Db {
  constructor () {
    this.sequelize = new Sequelize(process.env.POSTGRESQL_DB_NAME, process.env.POSTGRESQL_USERNAME, process.env.POSTGRESQL_PASSWORD, {
      host: process.env.POSTGRESQL_HOST,
      port: process.env.POSTGRESQL_PORT,
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
