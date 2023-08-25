"use strict"
const startScreen = document.querySelector("#start-screen");
const music = document.querySelector("audio"); 
const startButton = document.querySelector("#start-screen > button");
const soundButton = document.querySelector("#sound-button");
const gameScreen = document.querySelector("main > #game-screen");

startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    soundButton.style.display = "unset";
    music.play();
    gameScreen.style.display = "flex";
});
