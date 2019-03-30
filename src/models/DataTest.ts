import { TypePlat } from './TypePlat';
import { Plat } from './Plat';

async function load () {
  console.info('[DataTest:load] Start to create Data Test !');

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| TYPE_PLAT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  // Create Type Plat.
  const typePlats = [
    { libelle: 'Entrée' }, //  1
    { libelle: 'Plat' },   //  2
    { libelle: 'Désert' }, //  3
    { libelle: 'Boisson' } //  4
  ]

  await Promise.all(typePlats.map((typePlat, key) => {
    return new Promise(resolve => {
      TypePlat.model.create(typePlat).then(res => {
        console.info(`[DataTest:load] TypePlat ${res.libelle} created.`);
        typePlats[key] = res
        resolve(true);
      }).catch(err => {
        console.error('[DataTest:load] ERROR :', err);
        resolve(false);
      });
    });
  }));

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| PLAT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// Create Plat.
  const plats = [
    { // 1
      nom: 'Steak Frites',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      prix: 24.5,
      urlPhoto: 'somethink',
      typePlatId: 2
    }
  ];

  Plat.alterTable()
  await Promise.all(plats.map(plat => {
    return new Promise(resolve => {
      Plat.model.create(plat, {
        include: [{
          association: Plat.toTypePlat
        }]
      }).then(res => {
        console.info(`[DataTest:load] Plat ${res.nom} created.`);
        resolve(true);
      }).catch(err => {
        console.error('[DataTest:load] ERROR :', err);
        resolve(false);
      });
    });
  }));

  console.info('[DataTest:load] Data Test created !');

  process.exit(0);
}

load();
