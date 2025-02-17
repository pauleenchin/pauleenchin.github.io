document.addEventListener("DOMContentLoaded", function () {
    // nav toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        navToggle.textContent = navLinks.classList.contains("show") ? "▲" : "▼";
    });

    // switch exercises
    const exercise1Link = document.getElementById("exercise-link");
    const exercise2Link = document.getElementById("exercise2-link");
    const travelSection = document.getElementById("travel-section");
    const heartSection = document.getElementById("heart-section");

    exercise1Link.addEventListener("click", function (e) {
        e.preventDefault();
        travelSection.classList.remove("hidden");
        heartSection.classList.add("hidden");
        closeMenu();
    });

    exercise2Link.addEventListener("click", function (e) {
        e.preventDefault();
        heartSection.classList.remove("hidden");
        travelSection.classList.add("hidden");
        closeMenu();
    });

    function closeMenu() {
        if (window.innerWidth < 768 && navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
            navToggle.textContent = "▼";
        }
    }

    // exercise 1
    const transportInput = document.getElementById("transport-input");
    const transportImg = document.getElementById("transport-img-container");

    transportInput.addEventListener("input", function () {
        const value = transportInput.value.trim().toLowerCase();
        let imgSrc = "";

        if (value === "bike") {
            imgSrc = "images/bike.png";
        } else if (value === "scooter") {
            imgSrc = "images/scooter.png";
        } else if (value === "car") {
            imgSrc = "images/car.png";
        } else if (value === "skateboard") {
            imgSrc = "images/skateboard.png";
        }
  
        if (imgSrc !== "") {
            transportImg.innerHTML = `<img src="${imgSrc}" alt="${value}">`;
        } else {
            transportImg.innerHTML = "";
        }
    });

    // exercise 2
    const colorButtons = document.querySelectorAll("button[data-color]");
    colorButtons.forEach(button => button.addEventListener("click", changeHeartColor));

    function changeHeartColor(e) {
        document.getElementById("heart").style.color = e.target.getAttribute("data-color");
    }
});