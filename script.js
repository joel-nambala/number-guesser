'use strict';
const form = document.querySelector('form');
const guessInput = document.querySelector('.guess-input');
const guessMessage = document.querySelector('.guess-message');
const guessLimitDOM = document.querySelector('.guess-limit');

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
// Generate a random number
const randomNumber = randomInt(1, 10);

const guessNumber = function (e) {
  // Prevent default behaviour
  e.preventDefault();

  // Get the guessed value from the UI
  const guess = +guessInput.value;
  console.log(guess, randomNumber);

  if (guess < randomNumber) {
    guessMessage.textContent = 'The number is too low';
  }

  if (guess > randomNumber) {
    guessMessage.textContent = 'The number is too high';
  }

  if (guess === randomNumber) {
    guessMessage.textContent = 'Correct number';
  }
};

form.addEventListener('submit', guessNumber);

/*
const secretNumber = 4;
let guessCount = 0;
const guessLimit = 3;

while (guessCount < guessLimit) {
  const guess = +prompt('Guess a number');
  if (guess != secretNumber) {
    console.log('Wrong, Try again!');
  } else {
    console.log('Correct number!');
    break;
  }
  guessCount++;
}
*/
