import Models = require("./models");
import sequelize = require("./services/sequelize");

sequelize.getInstance();

async function load() {
  const loading = Object.keys(Models).map(async (key: string) => {
    await new Promise((resolve) => {
      const model: any = Models[key].model;
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

  process.exit(0);
}

load();
