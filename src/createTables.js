import Models from './models/index';
import sequelize from './services/sequelize';

sequelize.getInstance();

async function load () {
  const loading = Object.keys(Models).map(async key => {
    await new Promise(resolve => {
      Models[key].sync({ force: true }).then(() => {
        console.info(`Table ${key} created !`);
        resolve();
      }).catch(error => {
        console.error(`Unable to create Table ${key} !`, error);
        resolve();
      });
    });
  });

  await Promise.all(loading);

  process.exit(0);
}

load();