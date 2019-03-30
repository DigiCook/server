import { TypePlat } from './TypePlat';
import { Plat } from './Plat';
import { Adresse } from './Adresse';
import { Exploitation } from './Exploitation';
import { Personne, TypePersonne } from './Personne';
import { Restaurant } from './Restaurant';

async function load () {
  console.info('[DataTest:load] Start to create Data Test !');

  //-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| TYPE_PLAT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  // Create Type Plat.
  const typePlats: any = [
    { libelle: 'Entrée' }, //  0
    { libelle: 'Plat' },   //  1
    { libelle: 'Désert' }, //  2
    { libelle: 'Boisson' } //  3
  ]

  TypePlat.alterTable()
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
  const plats: any = [
    { // 0
      nom: 'Steak Frites',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      prix: 24.5,
      urlPhoto: 'somethink',
      typePlatId: typePlats[1].id
    },
    { // 1
      nom: 'Tarte aux Pommes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      prix: 24.5,
      urlPhoto: 'somethink',
      typePlatId: typePlats[2].id
    }
  ];

  // Generate relations.
  Plat.alterTable()
  await Promise.all(plats.map((plat, key) => {
    return new Promise(resolve => {
      Plat.model.create(plat, {
        include: [{
          association: Plat.toTypePlat
        }]
      }).then(res => {
        console.info(`[DataTest:load] Plat ${res.nom} created.`);
        plats[key] = res
        resolve(true);
      }).catch(err => {
        console.error('[DataTest:load] ERROR :', err);
        resolve(false);
      });
    });
  }));

  //-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| ADRESSE ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


  const adresses: any = [
    { // 0
      pays: "France",
      ville: "Megevette",
      codePostal: 74490,
      complement: "3 grande rue du grand pre"
    },
    { // 1
      pays: "France",
      ville: "Annecy",
      codePostal: 74000,
      complement: "17 faubourg sainte claire"
    },
    { // 2
      pays: "France",
      ville: "Megevette",
      codePostal: 74490,
      complement: "3 rue chez martin"
    },
    { // 3
      pays: "France",
      ville: "Annecy",
      codePostal: 74000,
      complement: "12 faubourg sainte claire"
    }
  ]

  Adresse.alterTable()
  await Promise.all(adresses.map((adresse, key) => {
    return new Promise(resolve => {
      Adresse.model.create(adresse).then(res => {
        console.info(`[DataTest:load] Adresse ${res.ville} ${res.pays} created.`);
        adresses[key] = res
        resolve(true);
      }).catch(err => {
        console.error('[DataTest:load] ERROR :', err);
        resolve(false);
      });
    });
  }));

  //-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| EXPLOITATION ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const exploitations: any = [
    { // 0
      nom: 'la Ferme De Martin',
      adresseId: adresses[2].id
    }
  ];

  Exploitation.alterTable()
  await Promise.all(exploitations.map((exploitation, key) => {
    return new Promise(resolve => {
      Exploitation.model.create(exploitation, {
        include: [{
          association: Exploitation.toAdresse
        }]
      }).then(res => {
        console.info(`[DataTest:load] Exploitation ${res.nom} created.`);
        exploitations[key] = res
        resolve(true);
      }).catch(err => {
        console.error('[DataTest:load] ERROR :', err);
        resolve(false);
      });
    });
  }));

  //-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| PERSONNE ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const personnes: any = [
    { // 0
      nom: "Pierre",
      prenom: "Jean",
      email: "client-jean@gmail.com",
      telephone: "0101010101",
      typePersonne: TypePersonne.CLIENT,
      adresseId: adresses[0].id,
    },
    { // 1
      nom: "Martin",
      prenom: "Michel",
      email: "restaurateur-michel@gmail.com",
      telephone: "0202020202",
      typePersonne: TypePersonne.RESTAURATEUR,
      adresseId: adresses[1].id
    },
    { // 2
      nom: "Durand",
      prenom: "paul",
      email: "producteur-paul@gmail.com",
      telephone: "0303030303",
      typePersonne: TypePersonne.PRODUCTEUR,
      exploitationId: exploitations[0].id,
      adresseId: adresses[2].id,
    }
  ];

  Personne.alterTable()
  await Promise.all(personnes.map((personne, key) => {
    return new Promise(resolve => {
      Personne.model.create(personne, {
        include: [
          { association: Personne.toExploitation },
          { association: Personne.toAdresse }
        ]
      }).then(res => {
        console.info(`[DataTest:load] Exploitation ${res.nom} created.`);
        exploitations[key] = res
        resolve(true);
      }).catch(err => {
        console.error('[DataTest:load] ERROR :', err);
        resolve(false);
      });
    });
  }));

  //-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| RESTAURANT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const restaurants: any = [
    { // 0
      nom: "La Sapaudia",
      restaurateurId: adresseRestaurateur,
      adresseId: adresseRestaurant,
    }
  ];

  console.info('[DataTest:load] Data Test created !');

  process.exit(0);
}

load();
