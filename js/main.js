document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-button");
  const activeMenu = document.getElementById("active-menu");

 
  const menuData = {
    drinks: [
      { name: "Espresso", price: "$2.50", desc: "A concentrated coffee with bold flavor and rich aroma.", img: "../assets/espresso.png" },
      { name: "Americano", price: "$2.75", desc: "Espresso diluted with hot water for a smoother taste.", img: "assets/cafe-americano.png" },
      { name: "Latte", price: "$3.50", desc: "Espresso blended with steamed milk and a light layer of foam.", img: "assets/latte.jpg" },
      { name: "Americano", price: "$2.75", desc: "Espresso diluted with hot water for a smoother taste.", img: "assets/espresso.png" },
      { name: "Cappuccino", price: "$3.75", desc: "A balanced mix of espresso, steamed milk, and creamy foam.", img: "assets/capuccino.jpg" },
      { name: "Mocha", price: "$4.00", desc: "Espresso combined with hot chocolate and steamed milk, topped with cream.", img: "assets/mocha.jpg" },
      { name: "Macchiato", price: "$3.25", desc: "Espresso with just a dash of steamed milk.", img: "assets/macchiato.jpg" },
      { name: "Flat White", price: "$3.50", desc: "A smooth coffee with velvety microfoam.", img: "assets/flat-white.jpg" },
      { name: "Cortado", price: "$3.00", desc: "Equal parts espresso and warm milk for a mellow flavor.", img: "assets/cortado.jpg" },
      { name: "Cold Brew", price: "$4.25", desc: "Slowly steeped coffee served cold; smooth and refreshing.", img: "assets/cold-brew.png" },
      { name: "Affogato", price: "$4.50", desc: "A scoop of ice cream drowned in a shot of hot espresso.", img: "assets/Affogato.jpg"}
      
      
    ],
    pastries: [
      { name: "Croissant", price: "$2.50", desc: "A soft and buttery croissant, perfect to pair with your coffee.", img: "assets/croissant.jpg" },
      { name: "Apple Pie", price: "$3.00", desc: "Delicious pastry filled with apples and cinnamon, perfect for sweet lovers.", img: "assets/apple-pie.jpg" },
      { name: "Glazed Donut", price: "$1.80", desc: "Classic glazed donut with a sweet sugar touch, soft and fluffy.", img: "assets/glazed-donut.jpg" },
      { name: "Lemon Muffin", price: "$2.20", desc: "Fluffy muffin with a citrusy lemon twist, ideal for a light breakfast.", img: "assets/lemmon.muffin.jpg" },
      { name: "Chocolate Brownie", price: "$3.50", desc: "Moist, rich chocolate brownie with walnuts for an extra intense flavor.", img: "assets/chocolate-brownie.jpg" }
    ],
    sandwiches: [
      { name: "Ham & Cheese Sandwich", price: "$4.00", desc: "Classic ham and melted cheese on freshly baked bread.", img: "assets/ham-cheese.jpg" },
      { name: "Turkey Club Sandwich", price: "$5.50", desc: "Layers of turkey, lettuce, tomato, and crispy bacon with mayo.", img: "assets/turkey.jpg" },
      { name: "Caprese Sandwich", price: "$4.80", desc: "Fresh mozzarella, tomato, and basil drizzled with olive oil.", img: "assets/caprese.jpg" },
      { name: "Grilled Chicken Sandwich", price: "$5.20", desc: "Grilled chicken breast with lettuce, tomato, and creamy sauce.", img: "assets/chicken.jpg" },
      { name: "Veggie Sandwich", price: "$4.50", desc: "A healthy mix of grilled vegetables with hummus on whole grain bread.", img: "assets/veggie.jpg" }
    ]
  };

  function renderMenu(category) {
   
    activeMenu.innerHTML = "";

   
    menuData[category].forEach(item => {
      const option = document.createElement("div");
      option.classList.add("active-option");

      option.innerHTML = `
        <img class="option-image" src="${item.img}" alt="${item.name}">
        <h3 class="option-name">${item.name}</h3>
        <p class="price">${item.price}</p>
        <p class="description">${item.desc}</p>
      `;

      activeMenu.appendChild(option);
    });
  }


  function handleButtonClick(e) {
    const category = e.target.id;

    
    menuButtons.forEach(btn => btn.classList.remove("active"));
   
    e.target.classList.add("active");

    
    renderMenu(category);
  }

 
  menuButtons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
  });

  
  document.getElementById("drinks").classList.add("active");
  renderMenu("drinks");
});




// MAPA CHAVALES


const mapWrapper = document.getElementById('mapWrapper');
const overlay = document.getElementById('mapOverlay');

overlay.addEventListener('click', function (e) {
  e.stopPropagation();
  mapWrapper.classList.add('expanded');
});

document.addEventListener('click', function (e) {
  if (!mapWrapper.contains(e.target)) {
    mapWrapper.classList.remove('expanded');
  }
});

const mapContainer = document.querySelector('.map-container');
const infoContainer = document.querySelector('.info-container');

mapContainer.addEventListener('click', () => {
  mapContainer.classList.add('expanded');
  infoContainer.style.display = 'none';
});



