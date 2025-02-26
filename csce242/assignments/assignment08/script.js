document.addEventListener("DOMContentLoaded", () => {
    const items = [
        {title: "Happy Birthday", img: "images/birthday.jpg"},
        {title: "Crazy Clown", img: "images/clown.jpg"},
        {title: "It's Raining", img: "images/rain.jpg"},
        {title: "Quiet Time", img: "images/read.jpg"},
        {title: "Working Hard", img: "images/shovel.jpg"},
        {title: "Work from Home", img: "images/work.jpg"}
    ];

    const titlesContainer = document.getElementById("title-container");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const closeButton = document.getElementById("close");

    // Loop through the array and create title elements
    items.forEach(item => {
        const titleDiv = document.createElement("div");
        titleDiv.textContent = item.title;
        titleDiv.classList.add("title-item");
        titleDiv.style.margin = "10px 0";
        titleDiv.style.color = "var(--secondary-color)";
        titleDiv.style.fontSize = "18px";
        
        titleDiv.addEventListener("click", () => showPopup(item.title, item.img));
        titlesContainer.appendChild(titleDiv);
    });

    // Show popup function
    function showPopup(title, imageUrl) {
        popupTitle.textContent = title;
        popupImage.src = imageUrl;
        popup.classList.remove("hidden");
    }

    // Close popup
    closeButton.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    // Hide popup if clicked outside
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.add("hidden");
        }
    });
});