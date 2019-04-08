import {
  Adresse,
  Exploitation,
  Ingredient,
  Menu,
  MenuPlat,
  Personne,
  Plat,
  PlatIngredient,
  Restaurant,
  RestaurantMenu,
  RestaurantPlat,
  TypePlat
} from "./models";
import { TypePersonne } from "./models/Personne";

async function load() {
  console.info("[DataTest:load] Start to create Data Test !");

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| TYPE_PLAT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  // Create Type Plat.
  const typePlats: any = [
    { libelle: "Entrée" },  //  0
    { libelle: "Plat" },    //  1
    { libelle: "Dessert" }, //  2
    { libelle: "Boisson" }  //  3
  ];

  TypePlat.alterTable();
  for (const key in typePlats) {
    if (key !== null) {
      await new Promise((resolve) => {
        const typePlat = typePlats[key];
        console.log(typePlat);
        TypePlat.model.create(typePlat).then((res) => {
          console.info(`[DataTest:load] TypePlat ${res.libelle} created.`);
          typePlats[key] = res;
          resolve(true);
        }).catch((err) => {
          console.error("[DataTest:load] ERROR :", err);
          resolve(false);
        });
      });
    }
  }

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| PLAT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  // Create Plat.
  const plats: any = [
    { // 0
      nom: "Steak Frites",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      prix: 24.5,
      urlPhoto: "https://media1.s-nbcnews.com/j/newscms/2017_20/1215042/food-today-170517-tease3_d47a6fa4727bee5705981981e47986aa.today-inline-large.jpg",
      typePlatId: typePlats[1].id
    },
    { // 1
      nom: "Tarte aux Pommes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      prix: 24.5,
      urlPhoto: "https://assets.afcdn.com/recipe/20180705/80308_w420h344c1cx1944cy2592cxt0cyt0cxb3888cyb5184.jpg",
      typePlatId: typePlats[2].id
    },
    { // 2
      nom: "Coca Cola",
      description: "Lorem ipsum dolor sit amet.",
      prix: 1.5,
      urlPhoto: "https://cocacolaweb.fr/wp-content/uploads/2009/03/coke_fa_l00157.jpeg",
      typePlatId: typePlats[3].id
    },
    { // 3
      nom: "Salade Savoyarde",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      prix: 10,
      urlPhoto: "https://cache.magicmaman.com/data/photo/w600_c18/48/salade.jpg",
      typePlatId: typePlats[0].id
    },
    { // 4
      nom: "Raclette",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      prix: 22,
      urlPhoto: "https://cdn6.elektronik-star.de/out/pictures/generated/product/2/700_700_75/10030306_0002_ambiente_Klarstein_Appenzell_2G_Raclette_reedit.jpg",
      typePlatId: typePlats[1].id
    },
    { // 5
      nom: "Vin pétillant AOC Ayze",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      prix: 25,
      urlPhoto: "https://www.fromages-et-vins-de-savoie.fr/wp-content/uploads/2017/05/AYZE-Cr-600x600.jpg",
      typePlatId: typePlats[3].id
    },
    { // 6
      nom: "Salade de sarrasin décortiqué grillé",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      prix: 12,
      urlPhoto: "http://www.markal.fr/media/salade-sarrasin-decortique.jpg",
      typePlatId: typePlats[0].id
    },
    { // 7
      nom: "Cheesecake de Mousse au chocolat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      prix: 8,
      urlPhoto: "https://thebusybaker.ca/wp-content/uploads/2017/11/vegan-chocolate-mousse-cheesecake-fbig4.jpg",
      typePlatId: typePlats[2].id
    },
    { // 8
      nom: "Pattes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      prix: 5,
      urlPhoto: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9284-coquillettesau-beurre1.jpg",
      typePlatId: typePlats[1].id
    },
    { // 9
      nom: "Eau",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      prix: 0.5,
      urlPhoto: "http://www.asmagic.fr/img/p/2/8/3/1/2831-large.jpg",
      typePlatId: typePlats[3].id
    }
  ];

  // Generate relations.
  Plat.alterTable();
  await Promise.all(plats.map((plat, key) => {
    return new Promise((resolve) => {
      Plat.model.create(plat, {
        include: [{
          association: Plat.toTypePlat
        }]
      }).then((res) => {
        console.info(`[DataTest:load] Plat ${res.nom} created.`);
        plats[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| ADRESSE ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

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
  ];

  Adresse.alterTable();
  await Promise.all(adresses.map((adresse, key) => {
    return new Promise((resolve) => {
      Adresse.model.create(adresse).then((res) => {
        console.info(`[DataTest:load] Adresse ${res.ville} ${res.pays} created.`);
        adresses[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| EXPLOITATION ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const exploitations: any = [
    { // 0
      nom: "la Ferme De Martin",
      adresseId: adresses[2].id
    }
  ];

  Exploitation.alterTable();
  await Promise.all(exploitations.map((exploitation, key) => {
    return new Promise((resolve) => {
      Exploitation.model.create(exploitation, {
        include: [{
          association: Exploitation.toAdresse
        }]
      }).then((res) => {
        console.info(`[DataTest:load] Exploitation ${res.nom} created.`);
        exploitations[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| RESTAURANT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const restaurants: any = [
    { // 0
      nom: "La Sapaudia",
      adresseId: adresses[2].id,
    }
  ];

  Restaurant.alterTable();
  await Promise.all(restaurants.map((restaurant, key) => {
    return new Promise((resolve) => {
      Restaurant.model.create(restaurant, {
        include: [
          { association: Restaurant.toAdresse }
        ]
      }).then((res) => {
        console.info(`[DataTest:load] Restaurant ${res.nom} created.`);
        restaurants[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| PERSONNE ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

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
      adresseId: adresses[1].id,
      restaurantId: restaurants[0].id
    },
    { // 2
      nom: "Durand",
      prenom: "paul",
      email: "producteur-paul@gmail.com",
      telephone: "0303030303",
      typePersonne: TypePersonne.PRODUCTEUR,
      exploitationId: exploitations[0].id,
      adresseId: adresses[2].id
    }
  ];

  Personne.alterTable();
  await Promise.all(personnes.map((personne, key) => {
    return new Promise((resolve) => {
      Personne.model.create(personne, {
        include: [
          { association: Personne.toExploitation },
          { association: Personne.toAdresse },
          { association: Personne.toRestaurant }
        ]
      }).then((res) => {
        console.info(`[DataTest:load] Personne ${res.nom} created.`);
        personnes[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| MENU ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const menus: any = [
    { // 0
      nom: "Menu enfant",
      prix: 25,
      description: "C'est un menu, pour les enfants. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      urlPhoto: "https://assets.afcdn.com/story/20180327/de-simples-oeufs-mayo-bien-tradi-mais-bien-mis-en-scene-pour-paques-1152577_w767h767c1cx707cy1060.jpg"
    },
    { // 1
      nom: "Menu enfant vegan",
      prix: 20,
      description: "C'est un menu, pour les enfants vegan. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      urlPhoto: "https://tacodelmar.com/wp-content/uploads/2016/12/16TDM001_MenuFeaturedImage_800x800_vegetarian-1.jpg"
    },
    { // 2
      nom: "Menu Savoyard",
      prix: 30,
      description: "Le gras c'est la vie ! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      urlPhoto: "https://static.750g.com/images/auto-525/dae8686192b04029793e2c6f3f374c44/thinkstockphotos-874481434.jpg"
    },
    { // 3
      nom: "Menu economique",
      prix: 10,
      description: "Menu pour les pauvres et les radins. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      urlPhoto: "http://www.lamaisonclose.org/wp/wp-content/uploads/2011/02/estomac_plein_assiette_vide-600x600.jpg"
    }
  ];

  await Promise.all(menus.map((menu, key) => {
    return new Promise((resolve) => {
      Menu.model.create(menu).then((res) => {
        console.info(`[DataTest:load] Menu ${res.nom} created.`);
        menus[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| INGREDIENTS ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const ingredients: any = [
    { // 0
      nom: "Steak de boeuf",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      exploitationId: exploitations[0].id
    },
    { // 1
      nom: "Pomme de terre",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      exploitationId: exploitations[0].id
    },
    { // 2
      nom: "Pomme",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      exploitationId: exploitations[0].id
    }
  ];

  Ingredient.alterTable();
  await Promise.all(ingredients.map((ingredient, key) => {
    return new Promise((resolve) => {
      Ingredient.model.create(ingredient, {
        include: [
          { association: Ingredient.toExploitation }
        ]
      }).then((res) => {
        console.info(`[DataTest:load] Ingredient ${res.nom} created.`);
        ingredients[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| PLAT_INGREDIENT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const platIngredients: any = [
    { // 0
      platId: plats[0].id,
      ingredientId: ingredients[0].id
    },
    { // 1
      platId: plats[0].id,
      ingredientId: ingredients[1].id
    },
    { // 2
      platId: plats[1].id,
      ingredientId: ingredients[2].id
    }
  ];

  PlatIngredient.alterTable();
  await Promise.all(platIngredients.map((platIngredient, key) => {
    return new Promise((resolve) => {
      PlatIngredient.model.create(platIngredient, {
        include: [
          { association: PlatIngredient.toIngredient },
          { association: PlatIngredient.toPlat }
        ]
      }).then((res) => {
        console.info(`[DataTest:load] PlatIngredient: Plat ${res.platId} have Ingredient ${res.ingredientId} created.`);
        platIngredients[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| MENU_PLAT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const menuPlats: any = [
    {
      platId: plats[0].id,
      menuId: menus[0].id
    },
    {
      platId: plats[1].id,
      menuId: menus[0].id
    },
    {
      platId: plats[2].id,
      menuId: menus[0].id
    },
    {
      platId: plats[3].id,
      menuId: menus[2].id
    },
    {
      platId: plats[4].id,
      menuId: menus[2].id
    },
    {
      platId: plats[5].id,
      menuId: menus[2].id
    },
    {
      platId: plats[6].id,
      menuId: menus[1].id
    },
    {
      platId: plats[7].id,
      menuId: menus[1].id
    },
    {
      platId: plats[8].id,
      menuId: menus[3].id
    },
    {
      platId: plats[9].id,
      menuId: menus[3].id
    }
  ];

  MenuPlat.alterTable();
  await Promise.all(menuPlats.map((menuPlat, key) => {
    return new Promise((resolve) => {
      MenuPlat.model.create(menuPlat, {
        include: [
          { association: MenuPlat.toMenu },
          { association: MenuPlat.toPlat }
        ]
      }).then((res) => {
        console.info(`[DataTest:load] MenuPlat: Menu ${res.menuId} have Plat ${res.platId} created.`);
        menuPlats[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| RESTAURANT_PLAT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const restaurantPlats: any = [
    { // 0
      restaurantId: restaurants[0].id,
      platId: plats[0].id
    },
    { // 1
      restaurantId: restaurants[0].id,
      platId: plats[1].id
    }
  ];

  RestaurantPlat.alterTable();
  await Promise.all(restaurantPlats.map((restaurantPlat, key) => {
    return new Promise((resolve) => {
      RestaurantPlat.model.create(restaurantPlat, {
        include: [
          { association: RestaurantPlat.toRestaurant },
          { association: RestaurantPlat.toPlat }
        ]
      }).then((res) => {
        console.info(`[DataTest:load] RestaurantPlat: Restaurant ${res.restaurantId} have Plat ${res.platId} created.`);
        restaurantPlats[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| RESTAURANT_MENU ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

  const restaurantMenus: any = [
    { // 0
      restaurantId: restaurants[0].id,
      menuId: menus[0].id
    }
  ];

  RestaurantMenu.alterTable();
  await Promise.all(restaurantMenus.map((restaurantMenu, key) => {
    return new Promise((resolve) => {
      RestaurantMenu.model.create(restaurantMenu, {
        include: [
          { association: RestaurantMenu.toRestaurant },
          { association: RestaurantMenu.toMenu }
        ]
      }).then((res) => {
        console.info(`[DataTest:load] RestaurantMenu: Restaurant ${res.restaurantId} have Menu ${res.menuId} created.`);
        restaurantMenus[key] = res;
        resolve(true);
      }).catch((err) => {
        console.error("[DataTest:load] ERROR :", err);
        resolve(false);
      });
    });
  }));

  console.info("[DataTest:load] Data Test created !");

  process.exit(0);
}

load();
