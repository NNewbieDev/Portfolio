const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const option = document.querySelector("select");
const img = document.querySelector(".theme");

const images = [
  {
    name: "theme1",
    url: "public/images/theme1.svg",
  },
  {
    name: "theme2",
    url: "public/images/theme2.svg",
  },
  {
    name: "theme3",
    url: "public/images/theme3.svg",
  },
];

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});

option.addEventListener("change", function (e) {
  for (let item of images) {
    if (item.name === e.target.value) {
      img.src = item.url;
    }
  }
});
let count = 0;

function debounce(func, delay = 1000) {
  let timeout;

  return function executedFunc(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
}

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;
    return func(...args);
  };
}

// document.addEventListener(
//   "mousemove",
//   throttle(function (e) {
//     //     count++;
//     console.log(e);
//   })
// );
