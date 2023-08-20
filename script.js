const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});
document.querySelector(".home-1").addEventListener("click", () => {
  container.classList.remove("change");
  document.getElementById("home").classList.toggle("show");
});
document.querySelector(".trades").addEventListener("click", () => {
  container.classList.remove("change");
  document.getElementById("business").classList.toggle("show");
});
document.querySelector(".about").addEventListener("click", () => {
  container.classList.remove("change");
  document.getElementById("about-us").classList.toggle("show");
});
document.querySelector(".director-1").addEventListener("click", () => {
  container.classList.remove("change");
  document.getElementById("director").classList.toggle("show");
});
document.querySelector(".contact-1").addEventListener("click", () => {
  container.classList.remove("change");
  document.getElementById("contact-us").classList.toggle("show");
});
document.querySelector(".location-1").addEventListener("click", () => {
  container.classList.remove("change");
  document.getElementById("location").classList.toggle("show");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
