const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Luxury Lawn",
    price: "PKR 15,500",
    colors: [
      {
        code: "#4f1249", 
        img: "./imgs/lux2.jpg",
      },
      {
        code: "#1e201f", 
        img: "./imgs/lux3.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Ready To Wear",
    price: "PKR 12,000",
    colors: [
      {
        code: "#e777bc", 
        img: "./imgs/ready3.jpg",
      },
      {
        code: "#e5dae3", 
        img: "./imgs/ready2.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Formal Velvet",
    price: "PKR 24,500",
    colors: [
      {
        code: "#063a4e", 
        img: "./imgs/velvet2.jpg",
      },
      {
        code: "#320e0e", 
        img: "./imgs/velvet3.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Chiffon Festive",
    price: "PKR 18,900",
    colors: [
      {
        code: "#67b7d9", 
        img: "./imgs/chiffon2.jpg",
      },
      {
        code: "#E6E6FA", 
        img: "./imgs/chiffon3.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Bridal Couture",
    price: "PKR 145,000",
    colors: [
      {
        code: "#8B0000", // Deep Crimson Red
        img: "./imgs/bridalm.jpg",
      },
      {
        code: "#D4AF37", // Metallic Gold
        img: "./imgs/bridalG.jpg",
      },
    ],
  },
];


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the choosen product
    choosenProduct = products[index];

    // Is block ko dhoond kar textContent ke niche sahi karein
  currentProductTitle.textContent = choosenProduct.title;
  currentProductPrice.textContent = choosenProduct.price;
  currentProductImg.src = choosenProduct.colors[0].img; // Yahan [0] lagana zaroori hai


    // Assign new colors dynamic layout
    currentProductColors.forEach((color, idx) => {
      if (choosenProduct.colors[idx]) {
        color.style.display = "block";
        color.style.backgroundColor = choosenProduct.colors[idx].code;
      } else {
        color.style.display = "none";
      }
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    if (choosenProduct.colors[index]) {
      currentProductImg.src = choosenProduct.colors[index].img;
    }
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "#fff";
      s.style.color = "#111";
    });
    size.style.backgroundColor = "#111";
    size.style.color = "#fff";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
