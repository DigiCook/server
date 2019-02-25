import Models = require("./models");
import sequelize = require("./services/sequelize");
import alterTables = require("./models/alterTables");

sequelize.getInstance();

async function load() {

  await syncAll();

  alterTables.execute();

  await syncAll();

  process.exit(0);
}

function syncAll () {
  return new Promise(async resolve => {
    const loading = Object.keys(Models).map(async (key: string) => {
      await new Promise((resolve) => {
        const model: any = Models[key];
        model.sync({ force: true }).then(() => {
          console.info(`Table ${key} created !`);
          resolve();
        }).catch((error: any) => {
          console.error(`Unable to create Table ${key} !`, error);
          resolve();
        });
      });
    });

    await Promise.all(loading);

    resolve();
  });
}

load();
