const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const links = document.querySelector(".links")

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

links.addEventListener("click", () => {
  container.classList.remove("active");
});