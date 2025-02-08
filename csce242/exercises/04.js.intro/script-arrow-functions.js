//v.1 arrow functions
const doStuff = () =>  { //variable = function => body of the function
    console.log("doing stuff");
}


//do stuff when button clicked
document.getElementById("btn-click-me").onclick = doStuff; //no parentheses creates an association, () means call now