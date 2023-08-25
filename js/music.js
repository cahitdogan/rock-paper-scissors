"use strict";
//const soundButton = document.querySelector("#sound-button")
//const music = document.querySelector("audio");

let soundStatus = "playing";

soundButton.addEventListener("click", function() {
    switch (soundStatus) {
        case "playing":
            music.pause();
            soundStatus = "stopped";
            soundButton.style.backgroundImage = "url(images/sound-off.svg)"
            break;
    
        case "stopped":
            music.play();
            soundStatus = "playing"
            soundButton.style.backgroundImage = "url(images/sound-on.svg)"
    }
});