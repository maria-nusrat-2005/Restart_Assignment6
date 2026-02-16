function goToProducts() {
  window.location.href = "products.html";
}
const loadLevel = () => {
  //   console.log(categories);

  const url = "https://fakestoreapi.com/products/categories";
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayProducts(data);
    });
};

const loadProducts = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayLoadProducts(data);
    });
};
//for all products
const displayLoadProducts = (products) => {
  console.log(products);
  const allProductsContainer = document.getElementById("allProducts-container");
  allProductsContainer.innerHTML = "";

  products.forEach((x) => {
    console.log(x);
    allProductsContainer.innerHTML += `
    <div class="bg-white space-y-3 p-3">
          <img
            class="flex justify-center items-center h-96"
            src="${x.image}"
            alt=""
          />
          <div class="flex gap-3 justify-between items-center">
            <button
              class="btn p-1 py-1 rounded-lg bg-purple-100 text-purple-500"
            >
              ${x.category}
            </button>
            <p class=""><i class="fa-solid fa-star"></i>${x.rating.rate} (${x.rating.count})</p>
          </div>
          <h3 class="text-2xl font-bold">${x.title}</h3>
          <p>Lorem ipsum dolor sit.</p>
          <div class="flex justify-between">
            <button class="btn"><i class="fa-regular fa-eye"></i>Details</button>
            <button class="btn btn-primary">
              <i class="fa-solid fa-cart-shopping"></i>Add
            </button>
          </div>
        </div>
    `;
  });
};
// loadProducts();
const displayProducts = (products) => {
  console.log(products);
  // 1.get the container and empty string
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    console.log(product);

    const div = document.createElement("div");
    div.innerHTML = `<div class="mt-10">   
          <button class="btn border border-1 border-blue-500 p-4 rounded-lg">${product}
</button>

        </div>`;
    productContainer.append(div);
  });
};
loadLevel();
