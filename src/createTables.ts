import Models = require("./models/index");
import sequelize = require("./services/sequelize");

sequelize.getInstance();

async function load() {
  const models = Models.default;
  const loading = Object.keys(models).map(async (key: string) => {
    await new Promise((resolve) => {
      const mod: any = models[key].default;
      mod.sync({ force: true }).then(() => {
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
