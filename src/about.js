// script.js

// Create menu bar
const menuBar = document.createElement("div");
menuBar.className = "menu-bar";

menuBar.innerHTML = `
  <div class="logo">
    <h1><span>Ranjit-ColdDrink-Shop</span></h1>
  </div>
  <div class="elements">
    <a href="index.html"><span>Home</span></a>
    <a href="product.html"><span>Product</span></a>
    <a href="about.html"><span>About</span></a>
    <a href="contact.html"><span>Contact</span></a>
  </div>
  <div class="login" style="opacity: 1;">
    <button>Login</button>
  </div>
`;

// Append menu bar to main
document.querySelector("main").appendChild(menuBar);

// Create footer
const footer = document.createElement("footer");
footer.innerHTML = `
  <div class="footer">
    <p>Copyright &copy; 2026 Ranjit-ColdDrink-Shop. All rights reserved.</p>
  </div>
`;

// Append footer to body
document.body.appendChild(footer);
