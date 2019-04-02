import Models = require("./models");
import sequelize = require("./services/sequelize");

sequelize.getInstance();

async function load() {
  const keys = Object.keys(Models);

  // Create Tabl
  console.info("[CreateTable:load] *** Start create tables ***");
  for (const key of keys) {
    await new Promise((resolve) => {
      const model = Models[key].model;

      model.sync({ force: true }).then(() => {
        console.info(`[CreateTable:load] Table ${key} created !`);
        resolve();
      }).catch((error: any) => {
        console.error(`[CreateTable:load] Unable to create Table ${key} !`, error);
        resolve();
      });
    });
  }

  console.info("[CreateTable:load] *** All tables created ***");

  // Start to execute alterTables for add Fk.
  console.info("[CreateTable:load] *** Start to execute alterTables ***");

  for (const key of keys) {
    await new Promise((resolve) => {

      const table = Models[key];
      if (table.hasOwnProperty("alterTable")) {
        // Execute query.
        table.alterTable();

        // Update the model in db.
        table.model.sync({ force: true }).then(() => {
          console.info(`[CreateTable:load] Table ${key} synced !`);
          resolve();
        }).catch((error: any) => {
          console.error(`[CreateTable:load] Unable to sync Table ${key} !`, error);
          resolve();
        });
      } else {
        resolve();
      }
    });
  }
  console.info("[CreateTable:load] *** All alterTables executed ***");
  console.info("[CreateTable:load] Finish");

  process.exit(0);
}

load();
