//say hello section
document.getElementById("say-hello-section").onclick = () => {
    const hellos = document.getElementById("say-hello-message");
    hellos.innerHTML += "hello<br>";
}

//color picker section
document.getElementById("color-picker").value = 0o0; // Initial value of slider
document.getElementById("color-picker").oninput = () => {
    const input = document.getElementById("color-picker").value;
    document.getElementById("star").style.color = input;
}

 //image change section
 const images = ["images/bunny01.jpg", "images/bunny02.jpg", "images/bunny03.jpg"];
 let currentImg = 0;
 
 document.getElementById("rand-img").onclick = () => {
     currentImg++;
     if (currentImg >= images.length) {
         currentImg = 0; 
     }

     document.getElementById("rand-img").src = images[currentImg];
 };