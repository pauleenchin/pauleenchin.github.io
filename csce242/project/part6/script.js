// nav toggle
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".toggle-nav");
    const navItems = document.querySelector(".nav-items");

    navToggle.addEventListener("click", function () {
        navItems.classList.toggle("show");
    });
});

// Load monsters.json and populate Yu-Gi-Dex and Monster Page

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://pauleenchin.github.io/csce242/json/monsters.json")
        .then(response => response.json())
        .then(monsters => {
            const urlParams = new URLSearchParams(window.location.search);
            const monsterName = urlParams.get("monster");

            if (document.getElementById("monsters")) {
                // Populate the Yu-Gi-Dex page
                populateDexPage(monsters);
            } else if (monsterName) {
                // Populate the Monster Page
                populateMonsterPage(monsters, monsterName);
            }
        })
        .catch(error => console.error("Error loading monster data:", error));
});

const populateDexPage = (monsters) => {
    const container = document.getElementById("monsters");
    container.innerHTML = "";

    monsters.forEach(monster => {
        const monsterCard = document.createElement("a");
        monsterCard.classList.add("clickable-box");
        monsterCard.href = `monster-page.html?monster=${encodeURIComponent(monster.name)}`;
        
        monsterCard.innerHTML = `
            <div class="yugi-block">
                <img src="../images/${monster.image}" alt="${monster.name}" />
                <p class="yugi-name">${monster.name}</p>
            </div>
        `;
        container.appendChild(monsterCard);
    });
};

const populateMonsterPage = (monsters, name) => {
    const monster = monsters.find(m => m.name === name);
    if (!monster) return;

    document.getElementById("yugi-number-name").innerHTML = `${monster.name} ${"&#9733;".repeat(monster.level)}`;
    document.getElementById("main-yugi-img").src = `../images/${monster.image}`;
    document.getElementById("bio-text").innerHTML = `<p>${monster.biotext}</p>`;
    
    document.querySelector("#sub-section .columns").innerHTML = `
        <div class="one"><h4>[${monster.type}]</h4></div>
        <div class="one"><h4>Attribute: ${monster.attribute}</h4></div>
    `;

    document.querySelector("#sub-section .columns:last-child").innerHTML = `
        <div class="one"><h4>Attack: ${monster.attack}</h4></div>
        <div class="one"><h4>Defense: ${monster.defense}</h4></div>
    `;

    const cardArtContainer = document.getElementById("card-art");
    cardArtContainer.innerHTML = "<h4>Card Art</h4><div class='columns'></div>";
    const cardArtRow = cardArtContainer.querySelector(".columns");
    monster.cardart.forEach(img => {
        const imgElement = document.createElement("img");
        imgElement.src = `../images/${img}`;
        imgElement.classList.add("card-art-img", "one");
        cardArtRow.appendChild(imgElement);
    });
};