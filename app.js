let products = [
  {
    id: 1,
    img: "img1.avif",
    title: "Car tesla",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 3999,
    off: 40,
  },
  {
    id: 2,
    img: "img2.avif",
    title: "Honda F26",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 4500,
    off: 80,
  },
  {
    id: 3,
    img: "img3.webp",
    title: "Toyota",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 2500,
    off: 11,
  },
  {
    id: 4,
    img: "img4.avif",
    title: "Wangler Jeep",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 1500,
    off: 60,
  },
  {
    id: 2,
    img: "img2.avif",
    title: "Honda F26",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 4500,
    off: 80,
  },
  {
    id: 1,
    img: "img1.avif",
    title: "Car Tesla ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 3999,
    off: 20,
  },
  {
    id: 4,
    img: "img4.avif",
    title: "Wangler Jeep",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 1500,
    off: 60,
  },
  {
    id: 2,
    img: "img2.avif",
    title: "Honda F26",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 4500,
    off: 80,
  },
];

const cartItems = JSON.parse(localStorage.getItem("data")) || [];


function generateProductHTML(e) {
  const discountPrice = (e.price * (e.off / 100)) / 100;
  let iconBackgroundColor = "";

  if (discountPrice > 0 && discountPrice <= 10) {
    iconBackgroundColor = "red";
  } else {
    iconBackgroundColor = "orange";
  }

  return `
    <div class="item">
      <div class="icon" style="background-color: ${iconBackgroundColor};">
        ${discountPrice.toFixed(1)} %
      </div>
      <div class="item-img">
        <img src="images/${e.img}" alt="" width="100%">
      </div>
      <div class="item-content">
        <h1>${e.title}</h1>
        <p>${e.desc}</p>
        <h4>Price: <span>${(e.price - discountPrice).toFixed(2)}</span> Rs</h4>
        <div class="item-link">
          <button onClick="addtocart('${e.id}')" class="btn"><i class="fa-brands fa-opencart"></i> Add To Cart</button>
        </div>
      </div>
    </div>
  `;
}


let html = "";
products.forEach((e) => {
  html += generateProductHTML(e);
});

document.getElementById("data").innerHTML = html;

document.getElementById("quantity").innerHTML = `(${cartItems.length})`;

function addtocart(id) {
  const existingItem = cartItems.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
    alert("Item already exists");
  } else {
    const newItem = { id: id, quantity: 1 };
    alert("Item added successfully");
    cartItems.push(newItem);
  }

  localStorage.setItem("data", JSON.stringify(cartItems));
  window.location.reload();
}

function displayProducts(products) {
  let html = "";

  products.forEach((element) => {
    html += generateProductHTML(element);
  });

  document.getElementById("data").innerHTML = html;
}

// Filtered products function
function filterProducts(query) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.desc.toLowerCase().includes(query.toLowerCase()) ||
    product.price.toString().includes(query)
  );

  displayProducts(filteredProducts);
}

// Event listener for search box
document.getElementById("searchBox").addEventListener("input", (event) => {
  const searchQuery = event.target.value;
  filterProducts(searchQuery);
});

displayProducts(products);
