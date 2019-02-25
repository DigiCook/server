//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| TYPE_PLAT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
let entre = {
    libelle: "entrée"
}
let plat = {
    libelle: "plat"
}
let desert = {
    libelle: "désert"
}
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| ADRESSE ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let adresseClient = {
    pays: "France",
    ville: "Megevette",
    codePostal: 74490,
    complement: "3 grande rue du grand pre"
}
let adresseRestaurateur = {
    pays: "France",
    ville: "Annecy",
    codePostal: 74000,
    complement: "17 faubourg sainte claire"
}
let adresseProducteur = {
    pays: "France",
    ville: "Megevette",
    codePostal: 74490,
    complement: "3 rue chez martin"
}
let adresseRestaurant = {
    pays: "France",
    ville: "Annecy",
    codePostal: 74000,
    complement: "12 faubourg sainte claire"
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| EXPLOITATION ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let exploitation = {
    adresseId: adresseProducteur,
    nomRestaurant: "la Ferme De Martin"
}
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| PERSONNE ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
let client = {
    nom: "CLIENT",
    prenom: "Jean",
    adresseId: adresseClient,
    email: "client-jean@gmail.com",
    numeroTelephone: "0101010101"
};
let restaurateur = {
    nom: "RESTAURATEUR",
    prenom: "Michel",
    adresseId: adresseRestaurateur,
    email: "restaurateur-michel@gmail.com",
    numeroTelephone: "0202020202"
}
let producteur = {
    nom: "PRODUCTEUR",
    prenom: "paul",
    adresseId: adresseProducteur,
    email: "producteur-paul@gmail.com",
    numeroTelephone: "0303030303",
    exploitationId: exploitation
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| RESTAURANT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let restaurant = {
    restaurateurId: adresseRestaurateur,
    adresseId: adresseRestaurant,
    nomRestaurant: "la Sapaudia"
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| MENU ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
let menuEnfant = {
    nomMenu: "menu enfant",
    description: "c'est un menu, pour les enfants",
    urlPhoto: "chépasadéterminer"
}
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| PLAT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let steakFrite = {
    typePlatId: plat,
    nomPlat: "steak Frites",
    descriptionPlat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

let tarteAuPomme = {
    typePlatId: desert,
    nomPlat: "tarte au pomme",
    descriptionPlat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| INGREDIENTS ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let viandeBoeuf = {
    explotationId: exploitation,
    nomIngredient: "steak de boeuf",
    descriptionIngredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}
let patate = {
    explotationId: exploitation,
    nomIngredient: "pomme de terre",
    descriptionIngredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}
let pomme = {
    explotationId: exploitation,
    nomIngredient: "pomme",
    descriptionIngredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| EST_DANS_LE_PLAT ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let tarteAuPome1 = {
    platId: tarteAuPomme,
    ingrediantId: pomme
}
let steakFrite1 = {
    platId: steakFrite,
    ingrediantId: patate
}
let steakFrite2 = {
    platId: steakFrite,
    ingrediantId: viandeBoeuf
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| EST_DANS_LE_MENU ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
let menuEnfant1 = {
    platId:tarteAuPomme,
    menuId:menuEnfant
}
let menuEnfant2 = {
    platId:steakFrite,
    menuId:menuEnfant
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ||| EST_DANS_LE_MENU ||| _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
