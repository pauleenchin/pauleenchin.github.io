const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json"; // where to recieve data from

    try {
        const response = await fetch(url); // goes w async
        return response.json();

    } catch(error) {
        console.log(error);
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeSection = document.getElementById("shoes-section");

    shoes.forEach ((shoe) => {
        shoesSection.append(shoe.name);

    })
};

showShoes();