"use strict"
const startScreen = document.querySelector("#start-screen");
const music = document.querySelector("audio"); 
const startButton = document.querySelector("#start-screen > button");
const soundButton = document.querySelector("#sound-button");
const gameScreen = document.querySelector("main > #game-screen");
const mediaQuery992 = window.matchMedia("(max-width: 992px)");

startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    soundButton.style.display = "unset";
    music.play();
    if (mediaQuery992.matches) {
        gameScreen.style.display = "flex";
    } else {
        gameScreen.style.display = "grid";
    }
    
});
