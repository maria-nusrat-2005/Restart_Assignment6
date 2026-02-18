function goToProducts() {
  window.location.href = "products.html";
}
function goToProducts2() {
  window.location.href = "index.html";
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
const loadProductDetail = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;

  console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displayLoadProductDetails(details);
};

const displayLoadProductDetails = (pro) => {
  console.log(pro);
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `<h2 class="font-bold text-2xl">${pro.title}</h2>
  <p>${pro.description}</p>
  <p class="font-bold">$${pro.price}</p>
   <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>`;
  document.getElementById("products_modal").showModal();
};
//for all product
const displayLoadProducts = (products) => {
  console.log(products);
  const allProductsContainer = document.getElementById("allProducts-container");
  allProductsContainer.innerHTML = "";

  products.forEach((x) => {
    console.log(x);
    allProductsContainer.innerHTML += `
    <div class="bg-white shadow-lg space-y-3 p-3">
          <img
            class="h-60 mx-auto object-contain"
            src="${x.image}"
            alt=""
          />
          <div class="flex gap-3 justify-between items-center">
            <button
              class="px-3 rounded-xl bg-purple-100 text-purple-500"
            >
              ${x.category}
            </button>
            <p class=""><i class="fa-solid fa-star"></i>${x.rating.rate} (${x.rating.count})</p>
          </div>
          <h3 class="text-2xl font-semibold">${x.title}</h3>
          <p class="font-bold">$${x.price}</p>
          <div class="flex justify-between">
            <button onclick="loadProductDetail(${x.id})" class="btn"><i class="fa-regular fa-eye"></i>Details</button>
            <button class="btn btn-primary">
              <i class="fa-solid fa-cart-shopping"></i>Add
            </button>
          </div>
        </div>
    `;
  });
};
// loadProducts();
// const displayProducts = (products) => {
//   console.log(products);
//   // 1.get the container and empty string
//   const productContainer = document.getElementById("product-container");

//   products.forEach((product) => {
//     console.log(product);
//     const div = document.createElement("div");
//     div.innerHTML = `<div class="mt-10">
//           <button onclick="()=>{console.log(this.product)}" class="btn border border-1 border-blue-500 p-4 rounded-lg">${product}
// </button>

//         </div>`;

//     productContainer.append(div);
//   });
// };
// const displayProductByCategory = (category) => {
//   console.log(category);
//   const url = `https://fakestoreapi.com/products/category/${category}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };
const displayProducts = (products) => {
  const productContainer = document.getElementById("product-container");

  products.forEach((category) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div class="mt-10">   
        <button 
          onclick="displayProductByCategory('${category.replace(/'/g, "\\'")}')"

          class="btn border border-1 border-blue-500 p-4 rounded-lg">
          ${category}
        </button>
      </div>
    `;

    productContainer.append(div);
  });
};

const displayProductByCategory = (category) => {
  const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;

  console.log("Category:", category);
  console.log("URL:", url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLoadProducts(data));
};

// loadCategoryProducts();
loadLevel();
