//say hello section
document.getElementById("say-hello-section").onclick = () => {
    const hellos = document.getElementById("say-hello-message");
    hellos.innerHTML += "hello<br>";
}

//color picker section
document.getElementById("color-picker").value = 0o0; // Initial value of slider
document.getElementById("color-picker").onchange = () => {
    const input = document.getElementById("color-picker").value;
    document.getElementById("star").style.color = input;
}

 //image change section
document.getElementById("rand-pic").onclick = () => {
    window.location.reload();
}