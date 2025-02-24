const steps = 10;
const rate = 35;

const drawBtn = document.getElementById("draw-button");
const climbBtn = document.getElementById("climb-button");
const img = document.querySelector("#ladder img");
const array = ["./images/right.png", "./images/left.png"];

const createLadder = () => {
    const ladder = document.getElementById("ladder");
    ladder.classList.add("border-inline");
    ladder.innerHTML = "";
    ladder.classList.remove("hidden");

    for (let i = 0; i < steps; ++i) {
        const hr = document.createElement("hr");
        ladder.append(hr);
    }
};

drawBtn.onclick = () => {
    createLadder();
    img.classList.remove("hidden");
    climbBtn.classList.remove("hidden");
    drawBtn.disabled = true;
};

climbBtn.onclick = () => {
    intervalId = setInterval(Climb, 1000);
    climbBtn.disabled = true;
};

let counter = 0;
let stepsClimbed = 0;
let intervalId;

const Climb = () => {
    const ladderHeight = steps * rate;
    let bottom = Number.parseInt(getComputedStyle(img).bottom) || 0;

    if (bottom + rate >= ladderHeight) {
        img.style.bottom = `${ladderHeight}px`;
        clearInterval(intervalId);
        climbBtn.disabled = false;
        return;
    }

    img.setAttribute("src", array[counter]);
    img.style.bottom = `${bottom + rate}px`;

    counter = (counter + 1) % 2;
    stepsClimbed++;

    if (stepsClimbed >= steps) {
        clearInterval(intervalId);
        climbBtn.disabled = false;
    }
};

