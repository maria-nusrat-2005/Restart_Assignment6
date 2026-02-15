function goToProducts() {
  window.location.href = "products.html";
}
const loadProducts = () => {
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
loadProducts();
