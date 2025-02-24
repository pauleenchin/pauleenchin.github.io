const steps = 10;
const rate = 35;

const drawBtn = document.getElementById("draw-button");
const climbBtn = document.getElementById("climb-button");
const img = document.querySelector("#ladder img");
const array = ["images/right.png", "images/left.png"];

let counter = 0;
let stepsClimbed = 0;
let intervalId;

const createLadder = () => {
    const ladder = document.getElementById("ladder");
    ladder.classList.add("border-inline");
    

    for (let i = 0; i < steps; ++i) {
        const hr = document.createElement("hr");
        ladder.append(hr);
    }

    img.src = "images/left.png";
    img.classList.remove("hidden");
    img.style.bottom = "0px";
};

drawBtn.onclick = () => {
    createLadder();
    ladder.classList.remove("hidden");
    
    climbBtn.classList.remove("hidden");
    drawBtn.disabled = true;
};

climbBtn.onclick = () => {
    intervalId = setInterval(Climb, 1000);
    climbBtn.disabled = true;
};

const Climb = () => {
    const ladderHeight = steps * rate;
    let bottom = parseInt(getComputedStyle(img).bottom) || 0;

    if (bottom + rate >= ladderHeight) {
        img.style.bottom = `${ladderHeight}px`;
        clearInterval(intervalId);
        climbBtn.disabled = false;
        return;
    }

    img.src = array[counter];
    img.style.bottom = `${bottom + rate}px`;

    counter = (counter + 1) % 2;
    stepsClimbed++;

    if (stepsClimbed >= steps) {
        clearInterval(intervalId);
        climbBtn.disabled = false;
    }
};
