const effect = document.querySelector(".effect");

function effectBg() {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  document.body.appendChild(e);

  e.style.left = Math.random() * innerWidth - 50 + "px";
  let size = Math.random() * 10;
  e.style.fontSize = 12 + size + "px";
  let duration = Math.random() * 2;
  e.style.animationDuration = 2 + duration + "s";
  setTimeout(function () {
    document.body.removeChild(e);
  }, 20000);
}

setInterval(function () {
  effectBg();
}, 500);
