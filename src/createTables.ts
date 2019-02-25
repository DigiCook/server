import Models = require("./models");
import sequelize = require("./services/sequelize");

sequelize.getInstance();

async function load() {
  const keys = Object.keys(Models);

  for (let i = 0; i < keys.length; i++) {
    await new Promise((resolve) => {
      const model = Models[keys[i]];
      model.sync({ force: true }).then(() => {
        console.info(`Table ${keys[i]} created !`);
        resolve();
      }).catch((error: any) => {
        console.error(`Unable to create Table ${keys[i]} !`, error);
        resolve();
      });
    });
  }

  process.exit(0);
}

load();
