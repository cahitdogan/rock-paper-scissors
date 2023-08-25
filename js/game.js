"use strict";

const pickButtons = document.querySelectorAll("#pick-buttons button");
const yourHand = document.querySelector("#your-hand");
const computerHand = document.querySelector("#computer-hand");
const yourScoreScreen = document.querySelector("#your-score");
const computerScoreScreen = document.querySelector("#computer-score");
const endScreen = document.querySelector("#end-screen");
const playAgain = document.querySelector("#end-screen > button")
let result = document.querySelector("#result");
let yourResult = document.querySelector("#your-result");
let computerResult = document.querySelector("#computer-result");
let yourPick;
let computersPick;
let yourScore = 0;
let computerScore = 0;

pickButtons.forEach(pick => {
    pick.addEventListener("click", function(){
        yourPick = this.getAttribute("data-pick-number");
        yourPick = Number(yourPick);
        computersPick = Math.floor(Math.random() * 3) + 1;

        yourHand.style.animation = "rightToLeft 0.7s linear infinite";
        computerHand.style.animation = "leftToRight 0.7s linear infinite";

        switch (yourPick) {
            case 1:
                switch (computersPick) {
                    case 1:
                        break;
                    case 2:
                        computerScore++;
                        break;
                    case 3:
                        yourScore++;
                }
                break;



            case 2:
                switch (computersPick) {
                    case 1:
                        yourScore++;
                        break;
                    case 2:
                        break;
                    case 3:
                        computerScore++;
                }
                break;
                    


            case 3:
                switch (computersPick) {
                    case 1:
                        computerScore++;
                        break;
                    case 2:
                        yourScore++;
                        break;
                    case 3:
                        break;
                }
                break;
        }

        setTimeout(() => {
            yourScoreScreen.innerHTML = yourScore;
            computerScoreScreen.innerHTML = computerScore;

            yourHand.style.animation = "none";
            yourHand.offsetHeight;
            computerHand.style.animation = "none";
            computerHand.offsetHeight;

            for (let i = 1; i <= 3; i++) {
                if (yourPick === i) {
                    yourHand.src = "images/lr_" + i + ".svg";
                    break;
                }
            }

            for (let i = 1; i <= 3; i++) {
                if (computersPick === i) {
                    computerHand.src = "images/rl_" + i + ".svg";
                    break;
                }
            }

            if (yourScore === 3 || computerScore ===3 ) {
                if (yourScore === 3) {
                    result.style.color = "green";
                    result.innerHTML = "YOU WIN!";
                } else if (computerScore === 3) {
                    result.style.color = "red";
                    result.innerHTML = "YOU LOST!";
                }
                yourResult.innerHTML = yourScore;
                computerResult.innerHTML = computerScore;

                endScreen.style.display = "block";
            }
        }, 1900);
    })
});

playAgain.addEventListener("click", function() {
    yourScore = 0;
    computerScore = 0;

    yourScoreScreen.innerHTML = 0;
    computerScoreScreen.innerHTML = 0;

    yourHand.src = "images/lr_1.svg";
    computerHand.src = "images/rl_1.svg";

    endScreen.style.display = "none";
});