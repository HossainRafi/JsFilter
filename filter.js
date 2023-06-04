// Fake Data ==============================================
const data = [
  {
    id: 1,
    name: "Apple Watch 4",
    img: "https://i.ibb.co/kgkK3Hh/apple-watch-ultra.png",
    price: 399,
    cat: "Watch",
  },
  {
    id: 2,
    name: "Black Hoodie",
    img: "https://i.ibb.co/LzyJbZ1/black-hoddie.png",
    price: 30,
    cat: "Dress",
  },
  {
    id: 3,
    name: "Gray Keds",
    img: "https://i.ibb.co/qjPZKHF/brown-keds.png",
    price: 90,
    cat: "Shoe",
  },
  {
    id: 4,
    name: "Galaxy Watch 5",
    img: "https://i.ibb.co/8K6rrnF/galaxy-watch-5.png",
    price: 499,
    cat: "Watch",
  },
  {
    id: 5,
    name: "Means Coat",
    img: "https://i.ibb.co/6PwPzNw/coat.png",
    price: 99,
    cat: "Dress",
  },
  {
    id: 6,
    name: "Red Hoddie",
    img: "https://i.ibb.co/HKy2PJS/girls-red-hoddie.png",
    price: 55,
    cat: "Dress",
  },
  {
    id: 7,
    name: "Neon Keds",
    img: "https://i.ibb.co/zhPnY8Y/neon-keds.png",
    price: 99,
    cat: "Shoe",
  },
  {
    id: 8,
    name: "Redmi Watch",
    img: "https://i.ibb.co/kXZxVz3/redmi-watch-3.png",
    price: 55,
    cat: "Watch",
  },
  {
    id: 9,
    name: "Girls Pant",
    img: "https://i.ibb.co/c83ChVd/girls-pant.png",
    price: 55,
    cat: "Casual",
  },
  {
    id: 10,
    name: "Xiaomi Watch",
    img: "https://i.ibb.co/VYntCvh/xiaomi-watch.png",
    price: 399,
    cat: "Watch",
  },
  {
    id: 11,
    name: "T-Shirt",
    img: "https://i.ibb.co/FWSNCGK/t-shirt.png",
    price: 25,
    cat: "Dress",
  },
  {
    id: 12,
    name: "Blue Shirt",
    img: "https://i.ibb.co/6gB5zGQ/blue-mens-shirt.png",
    price: 49,
    cat: "Dress",
  },
];

// Variables ==================================================
const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

// Display all products =======================================
const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
       <div class="product">
          <img
          src=${product.img}
          alt=""
          />
          <span class="name">${product.name}</span>
          <span class="priceText">$${product.price}</span>
        </div>
    `
    )
    .join("");
};
displayProducts(data);

