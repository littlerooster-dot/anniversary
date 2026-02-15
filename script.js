const music = document.getElementById("bgMusic");

document.addEventListener("click", function(){
    music.play();
}, { once: true });
