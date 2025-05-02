document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-button");
  const activeMenu = document.getElementById("active-menu");

 
  const menuData = {
    drinks: [
      { name: "Espresso", price: "$2.50", desc: "A concentrated coffee with bold flavor and rich aroma.", img: "assets/espresso.png" },
      { name: "Americano", price: "$2.75", desc: "Espresso diluted with hot water for a smoother taste.", img: "assets/cafe-americano.png" },
      { name: "Latte", price: "$3.50", desc: "Espresso blended with steamed milk and a light layer of foam.", img: "assets/latte.jpg" },
      { name: "Americano", price: "$2.75", desc: "Espresso diluted with hot water for a smoother taste.", img: "assets/espresso.png" },
      { name: "Cappuccino", price: "$3.75", desc: "A balanced mix of espresso, steamed milk, and creamy foam.", img: "assets/capuccino.jpg" },
      { name: "Mocha", price: "$4.00", desc: "Espresso combined with hot chocolate and steamed milk, topped with cream.", img: "assets/mocha.jpg" },
      { name: "Macchiato", price: "$3.25", desc: "Espresso with just a dash of steamed milk.", img: "assets/macchiato.jpg" },
      { name: "Flat White", price: "$3.50", desc: "A smooth coffee with velvety microfoam.", img: "assets/flat-white.jpg" },
      { name: "Cortado", price: "$3.00", desc: "Equal parts espresso and warm milk for a mellow flavor.", img: "assets/cortado.jpg" },
      { name: "Cold Brew", price: "$4.25", desc: "Slowly steeped coffee served cold; smooth and refreshing.", img: "assets/cold-brew.png" },
      { name: "Affogato", price: "$4.50", desc: "A scoop of ice cream drowned in a shot of hot espresso.", img: "assets/affogato.jpg"}
      
      
    ],
    pastries: [
      { name: "Croissant", price: "$2.50", desc: "Buttery pastry", img: "assets/croissant.jpg" },
      { name: "Muffin", price: "$2.00", desc: "Blueberry muffin", img: "assets/muffin.jpg" },
      { name: "Donut", price: "$1.80", desc: "Glazed classic", img: "assets/donut.jpg" }
    ],
    sandwiches: [
      { name: "Ham & Cheese", price: "$5.50", desc: "Classic combo", img: "assets/ham-cheese.jpg" },
      { name: "Veggie", price: "$5.00", desc: "Fresh greens", img: "assets/veggie.jpg" },
      { name: "Chicken Club", price: "$6.00", desc: "Loaded sandwich", img: "assets/chicken-club.jpg" }
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
