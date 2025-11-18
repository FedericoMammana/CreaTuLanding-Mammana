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
    category: "nuevos",
    img: "../prod-dihada.png",
  },
  {
    id: "04",
    name: "Commander Deck Hulkbreaker",
    description: " RGB commander Deck based on lands and sacrifice",
    stock: 5,
    price: 90000,
    category: "nuevos",
    img: "../prod-hulkbreaker.jpg",
  },
  {
    id: "05",
    name: "Commander Deck Zombies",
    description: " UBW commander Deck based on zombie tribal and cementery",
    stock: 5,
    price: 105000,
    category: "nuevos",
    img: "../prod-zombies.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};
