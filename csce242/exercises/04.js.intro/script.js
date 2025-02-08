//v.2

//JS is a loose-type script - 

//do stuff when button clicked, anonymous function
document.getElementById("btn-click-me").onclick = () => {
    console.log("wow");
    document.getElementById("result").innerHTML = "hi pauleen";
}

//change color
document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message");
    console.log("hello, world");

    messageP.innerHTML = "bye bye";
    messageP.classList.toggle("sad"); //add also works instead of toggle
    
    
}