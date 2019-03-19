import { TypePlat } from './TypePlat';
import { Plat, alterTable } from './Plat';

async function load () {
  console.info('[DataTest:load] Start to create Data Test !');

  // Create Type Plat.
  const typePlats = [
    { libelle: 'Entrée' },
    { libelle: 'Plat' },
    { libelle: 'Désert' },
    { libelle: 'Boisson' }
  ]

  await Promise.all(typePlats.map((typePlat, key) => {
    return new Promise(resolve => {
      TypePlat.create(typePlat).then(res => {
        console.info(`[DataTest:load] TypePlat ${res.libelle} created.`);
        typePlats[key] = res
        resolve(true);
      }).catch(err => {
        console.error('[DataTest:load] ERROR :', err);
        resolve(false);
      });
    });
  }));

  // Create Plat.
  const plats = [
    {
      nom: 'Steak Frites',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      prix: 24.5,
      urlPhoto: 'somethink',
      TypePlatId: 0
    }
  ];

  await Promise.all(plats.map(plat => {
    return new Promise(resolve => {
      console.log(plat)
      Plat.create(plat, {
        include: [{
          association: alterTable().Plat_TypePlat
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
