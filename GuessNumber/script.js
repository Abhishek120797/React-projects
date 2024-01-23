let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submit-btn");
const userInput = document.querySelector("#guessField");
const guesslot = document.querySelector("#guessSlot");
const reamining = document.querySelector("#remaining");
const lowOrHi = document.querySelector("#lowOrHi");
const startOver = document.querySelector("#result");

const p = document.createElement("p");

// let previousGuess = [];
let numberOfGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //validate input

  if (isNaN(guess)) {
    displayMessage(`please Enter number !`);
  } else if (guess < 1) {
    displayMessage(`Number should be Greater than 0 !`);
  } else if (guess > 100) {
    displayMessage(`Number should not be Grater than 100 !`);
  } else {
    // previousGuess.push(guess);
    numberOfGuess++;
    if (numberOfGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over ! Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check guess is equal to random number or not
  if (guess === randomNum) {
    displayMessage(`You guested it right`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNum) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  //display guess number
  userInput.value = "";
  guesslot.innerHTML += `${guess}, `;
  //   numberOfGuess++;
  reamining.innerHTML = `${10 - numberOfGuess}`;
}

function displayMessage(message) {
  //print message
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");

  newGameButton.addEventListener("click", function (event) {
    randomNum = parseInt(Math.random() * 100 + 1);
    numberOfGuess = 0;
    guesslot.innerHTML = "";
    reamining.innerHTML = `${10 - numberOfGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
