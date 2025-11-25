const products = [
  {
    id: "01",
    name: "Commander Deck Faldorn",
    description: " RG commander Deck based on exile cards and wolfs",
    stock: 5,
    price: 100000,
    category: "nuevos",
    img: "../prod-faldorn.png",
  },
  {
    id: "02",
    name: "Commander Deck Fearies",
    description: " UB commander Deck based on Fearies Tribal",
    stock: 1,
    price: 150000,
    category: "nuevos",
    img: "../prod-fae-dominion.png",
  },
  {
    id: "03",
    name: "Commander Deck Dihada",
    description: " RBW commander Deck based on treasures and legendary cards",
    stock: 5,
    price: 120000,
    category: "mas vendidos",
    img: "../prod-dihada.png",
  },
  {
    id: "04",
    name: "Commander Deck W.Shaper",
    description: " RGB commander Deck based on lands and sacrifice",
    stock: 5,
    price: 90000,
    category: "ofertas",
    img: "../prod-hulkbreaker.jpg",
  },
  {
    id: "05",
    name: "Commander Deck Zombies",
    description: " UBW commander Deck based on zombie tribal and cementery",
    stock: 5,
    price: 105000,
    category: "ofertas",
    img: "../prod-zombies.jpg",
  },
  {
    id: "06",
    name: "DragonShield Matte Black",
    description: "Box of 100 Black Matte Sleeves Standard Size ",
    stock: 5,
    price: 26000,
    category: "accesorios",
    img: "../ds-matte-black.png",
  },
  {
    id: "07",
    name: "DragonShield Matte Green",
    description: "Box of 100 Green Matte Sleeves Standard Size ",
    stock: 5,
    price: 26000,
    category: "accesorios",
    img: "../ds-matte-green.png",
  },
  {
    id: "08",
    name: "DragonShield Matte Ivory",
    description: "Box of 100 White Ivory Matte Sleeves Standard Size ",
    stock: 5,
    price: 26000,
    category: "accesorios",
    img: "../ds-matte-ivory.png",
  },
  {
    id: "09",
    name: "DragonShield Matte Ruby",
    description: "Box of 100 Red Ruby Matte Sleeves Standard Size ",
    stock: 5,
    price: 25000,
    category: "accesorios",
    img: "../ds-matte-ruby.png",
  },
  {
    id: "10",
    name: "DragonShield Matte Saphire",
    description: "Box of 100 Blue Saphire Matte Sleeves Standard Size ",
    stock: 5,
    price: 25000,
    category: "accesorios",
    img: "../ds-matte-saphire.png",
  },
];

/* export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  }); */

// esto es nuevo

let error = false;
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error intente mas tarde");
      } else {
        resolve(products);
      }
    }, 3000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let product = products.find((item) => item.id === id);
      resolve(product);
    }, 3000);
  });
};
