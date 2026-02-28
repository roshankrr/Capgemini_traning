let cartItems = document.getElementById("cart-items");
let cards = document.querySelectorAll(".card");
let empty = document.querySelector(".empty");

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
console.log(items.cart);
if (localStorage.length != 0) {
  let data = JSON.parse(items.cart);
  data.forEach((e) => {
    let div = document.createElement("div");
    div.style.padding = "5px";
    div.style.backgroundColor = "gray";
    div.style.margin = "5px";
    div.style.borderRadius = "5px";
    div.style.display = "inline-block";

    div.innerHTML = e.product;
    cartItems.appendChild(div);
  });
}
