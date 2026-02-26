let cartItems = document.getElementById("cart-items");
let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const productName = card.querySelector("h3").innerText;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ product: productName });
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart updated:", cart);
  });
});

let items = localStorage;
console.log(items);

// items.forEach((e) => {
//   let it = document.createElement("div");
//   it.innerHTML = e;
//   cartItems.appendChild(it);
// });
