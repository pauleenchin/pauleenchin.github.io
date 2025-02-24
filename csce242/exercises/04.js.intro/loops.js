document.getElementById("btn-display").onclick = () => {
    console.log("hi");
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const displayArea = document.getElementById("start-end-display");
    const errorDisplay = document.getElementById("error-num-order");
    const favMessageP = document.getElementById("fav-message");

    errorDisplay.innerHTML = ""; // clear previous ~~
    displayArea.innerHTML = "";
    favMessageP.innerHTML = "";

    if(endNum < startNum) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}`; // backtick to use var
        return; // don't do anything else if error
    }

    for(let i = startNum; i <= endNum; i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        displayArea.append(li);

        //attach event to onclick li
        li.onclick = () => {
            favMessageP.innerHTML = `You clicked ${i}`; // i still holds the value in this loop
        }



    }
}



