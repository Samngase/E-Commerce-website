// Placeholder for cart logic - later steps will expand
document.addEventListener("DOMContentLoaded", () => {
  console.log("Site loaded. Ready to shop!");
});
// Sample product data
const products = [
  { id: 1, name: "T-Shirt", price: 19.99 },
  { id: 2, name: "Sneakers", price: 49.99 },
  { id: 3, name: "Cap", price: 9.99 }
];

// Render products on products.html
if (document.getElementById('products-container')) {
  const container = document.getElementById('products-container');
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// Add to cart function using localStorage
function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart.`);
}

// Render cart on cart.html
if (document.getElementById('cart-items')) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-items');
  let total = 0;
  cartItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
    cartContainer.appendChild(div);
    total += item.price;
  });
  document.getElementById('total').innerText = total.toFixed(2);
}