const products = [
  {
    id: 1,
    name: "Web Development Starter Kit",
    price: 10,
    image: "images/web.jpg"
  },
  {
    id: 2,
    name: "AI Basics eBook",
    price: 12,
    image: "images/AI.png"
  },
  {
    id: 3,
    name: "UI/UX Design Guide",
    price: 8,
    image: "images/UX.png"
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("featured-products");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} added to cart!`);
}

const shopProducts = [
      {
        id: 1,
        name: "Web Development Starter Kit",
        price: 10,
        image: "images/web.jpg",
        description: "A complete kit to kickstart your journey in web development."
      },
      {
        id: 2,
        name: "AI Basics eBook",
        price: 12,
        image: "images/AI.png",
        description: "Understand the fundamentals of Artificial Intelligence with this guide."
      },
      {
        id: 3,
        name: "UI/UX Design Guide",
        price: 8,
        image: "images/UX.png",
        description: "A beginner-friendly guide to UI/UX design principles and tools."
      },
      {
        id: 4,
        name: "Python for Data Analysis",
        price: 15,
        image: "images/python.jpg",
        description: "Learn how to analyze data using Python libraries like Pandas and Matplotlib."
      }
    ];

    const shopContainer = document.getElementById("shop-products");
    shopProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <strong>$${product.price}</strong>
        <br>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      shopContainer.appendChild(card);
    });

    function addToCart(id) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const item = shopProducts.find(p => p.id === id);
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${item.name} added to cart!`);
    }

// Cart functionality
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  function displayCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    if (cartItems.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      totalDisplay.textContent = "";
      return;
    }

    cartItems.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <p><strong>${item.name}</strong> - $${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      `;
      cartContainer.appendChild(div);
      total += item.price;
    });

    totalDisplay.textContent = `Total: $${total}`;
  }

  function removeItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCart();
  }

  function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
  }

  window.onload = displayCart;

    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name && email && message) {
        localStorage.setItem("contactSubmission", JSON.stringify({ name, email, message }));
        feedback.textContent = "Thanks for reaching out! We will get back to you soon.";
        feedback.style.color = "green";
        form.reset();
      } else {
        feedback.textContent = "Please fill in all fields.";
        feedback.style.color = "red";
      }
    });