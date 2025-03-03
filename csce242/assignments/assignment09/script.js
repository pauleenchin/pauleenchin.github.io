class Pizza {
    constructor(name, ingredients, sauce, cheese, price, image) {
        this.name = name;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.image = image;
    }

    getSection() {
        return `
            <div class="pizza-box" onclick="openModal('${this.name}')">
                <img src="images/${this.image}" alt="${this.name}">
                <p class="pizza-title">${this.name}</p>
            </div>
        `;
    }
}

const pizzas = [
    new Pizza("Hawaiian", ["Ham", "Pineapple"], "Tomato Sauce", "Mozzarella", 18.99, "hawaiian.jpg"),
    new Pizza("Buffalo Chicken Ranch", ["Chicken", "Ranch Dressing"], "Buffalo Sauce", "Cheddar", 20.49, "buffalo.jpg"),
    new Pizza("Margherita", ["Basil", "Tomatoes"], "Extra Virgin Olive Oil", "Fresh Mozzarella", 19.20, "margherita.jpg"),
    new Pizza("Pepperoni", ["Pepperoni"], "Tomato Sauce", "Mozzarella", 17.99, "pepperoni.jpg"),
    new Pizza("Veggie", ["Olives", "Broccoli", "Peppers"], "Marinara", "Parmesan", 16.50, "veggie.jpg")
];

function displayPizzas() {
    const pizzaContainer = document.getElementById("pizzaContainer");
    pizzaContainer.innerHTML = pizzas.map(pizza => pizza.getSection()).join("");
}

function openModal(pizzaName) {
    const pizza = pizzas.find(p => p.name === pizzaName);
    if (pizza) {
        const modalImage = document.getElementById("modalImage");
        
        document.getElementById("modalTitle").textContent = pizza.name;
        document.getElementById("modalIngredients").textContent = pizza.ingredients.join(", ");
        document.getElementById("modalSauce").textContent = pizza.sauce;
        document.getElementById("modalCheese").textContent = pizza.cheese;
        document.getElementById("modalPrice").textContent = pizza.price.toFixed(2);
        modalImage.src = `images/${pizza.image}`;
        modalImage.alt = pizza.name;

        document.getElementById("pizzaModal").style.display = "block";

        modalImage.classList.remove("rotate");
        void modalImage.offsetWidth;
        modalImage.classList.add("rotate");
    }
}

function closeModal() {
    document.getElementById("pizzaModal").style.display = "none";
}

window.onload = displayPizzas;
