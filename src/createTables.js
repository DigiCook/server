import Product from './models/Product'

async function load () {
  await new Promise(resolve => {
    Product.sync({ force: true }).then(() => {
      console.info('Table Product created !');
      resolve();
    }).catch(error => {
      console.error('Unable to create Table Product !', error);
      resolve();
    });
  });

  process.exit(0);
}

load();