// nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navItems = document.querySelector(".nav-items");

navToggle.addEventListener("click", function () {
    navItems.classList.toggle("show");
});

document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};