// script.js

// Product data
const products = [
  { name: "मावा", price: 25, image: "../assets/image/background.png" },
  { name: "केसर", price: 25, image: "../assets/image/background.png" },
  { name: "मँगो", price: 25, image: "../assets/image/background.png" },
  { name: "पिस्ता", price: 25, image: "../assets/image/background.png" },
  { name: "चॉकलेट", price: 25, image: "../assets/image/background.png" },
  { name: "व्हॅनिला", price: 25, image: "../assets/image/background.png" },
  { name: "स्ट्रॉबेरी", price: 25, image: "../assets/image/background.png" },
  { name: "पायनॅपल", price: 25, image: "../assets/image/background.png" },
  { name: "बटरस्कॉच", price: 25, image: "../assets/image/background.png" },
  { name: "मावा मस्तानी", price: 80, image: "../assets/image/background.png" },
  { name: "केसर मस्तानी", price: 80, image: "../assets/image/background.png" },
  { name: "मँगो मस्तानी", price: 80, image: "../assets/image/background.png" },
  { name: "पिस्ता मस्तानी", price: 80, image: "../assets/image/background.png" },
  { name: "चॉकलेट मस्तानी", price: 80, image: "../assets/image/background.png" },
  { name: "स्पेशल मस्तानी", price: 80, image: "../assets/image/background.png" },
  { name: "स्ट्रॉबेरी मस्तानी", price: 80, image: "../assets/image/background.png" },
  { name: "पायनॅपल मस्तानी", price: 80, image: "../assets/image/background.png" },
  { name: "बटरस्कॉच मस्तानी", price: 80, image: "../assets/image/background.png" },
  { name: "साधी लस्सी", price: 35, image: "../assets/image/background.png" },
  { name: "स्पेशल लस्सी", price: 45, image: "../assets/image/background.png" },
  { name: "पिस्ता लस्सी", price: 45, image: "../assets/image/background.png" },
  { name: "केसर लस्सी", price: 45, image: "../assets/image/background.png" },
  { name: "मँगो लस्सी", price: 45, image: "../assets/image/background.png" },
  { name: "रोज मिल्क शेक", price: 35, image: "../assets/image/background.png" },
  { name: "पिस्ता शेक", price: 40, image: "../assets/image/background.png" },
  { name: "केसर शेक", price: 40, image: "../assets/image/background.png" },
  { name: "मँगो शेक", price: 70, image: "../assets/image/background.png" }
];

// Target container
const productContainer = document.querySelector(".product");

// Generate product cards
products.forEach(product => {
  const item = document.createElement("div");
  item.className = "item";
  item.dataset.name = product.name;
  item.dataset.price = product.price;

  item.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p class="price-line">Price: Rs <span class="unit-price">${product.price}</span></p>
    <div class="qty-controls" aria-label="Select quantity">
      <button class="qty-btn" type="button" data-qty="minus" aria-label="Decrease quantity">-</button>
      <input class="qty-input" type="text" value="1" readonly aria-label="Quantity">
      <button class="qty-btn" type="button" data-qty="plus" aria-label="Increase quantity">+</button>
    </div>
    <div class="cart-btn">
      <button class="buy-now" type="button">Buy Now</button>
    </div>
  `;

  productContainer.appendChild(item);
});
