// Import
import { progLang, listProj } from "./data.js";

// Declare
const badge = document.querySelector(".badge");
const galleryBlock = document.querySelector(".gallery-block");
const gallery = document.querySelector(".gallery");
const galleryClose = document.querySelector(".gallery-close");
const search = document.querySelector(".search");
// Render
const renderBadge = () => {
  if (!badge) {
    console.error("Element with class 'badge' not found!");
    return;
  }

  progLang.map((lang, index) => {
    badge.innerHTML += `<div >
                    <input type="radio" name="tech" value="${lang.name}" id="lang-${index}">
                    <label for="lang-${index}">
                    <i style="color:${lang.color}" class="fa-brands fa-${lang.icon}"></i>
                    <h3 style="color:${lang.color}">${lang.name}</h3>
                    </label>                    
    </div>`;
  });
};

const searchList = () => {
  let techSelect = document.getElementsByName("tech");

  let checkedInput = Array.from(techSelect).filter((item) => item.checked);

  if (checkedInput.length === 0) {
    return [];
  }

  let checkedValues = listProj.filter((item) =>
    item.tech.includes(checkedInput[0]?.value)
  );

  return checkedValues;
};

const renderProject = () => {
  galleryBlock.innerHTML = "";
  searchList().map((proj) => {
    galleryBlock.innerHTML += `<div class="">
                    <h3>${proj.name}</h3>
                    <a href="${proj.link}" target="_blank">
                          <img src="${proj.url}" loading="lazy"/>
                    </a>
                    <p>${proj.description}</p>
                    <p>Github: <a href="${proj.github}" target="_blank">
                              ${proj.github}
                    </a></p>
                  </div>`;
  });
};

// Call
document.addEventListener("DOMContentLoaded", () => {
  renderBadge();
});

const closeModal = () => {
  gallery.style.display = "none";
};

const openModal = () => {
  gallery.style.display = "flex";
};

search.onclick = () => {
  if (searchList()) {
    renderProject();
    openModal();
  }
};
galleryClose.onclick = () => closeModal();
