// nav toggle
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".toggle-nav");
    const navItems = document.querySelector(".nav-items");

    navToggle.addEventListener("click", function () {
        navItems.classList.toggle("show");
    });
});