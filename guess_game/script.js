'use strict';
/*
// a method  to select document object
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
// for input field we have to use the .value
document.querySelector('.guess').value = 10;

// Handling click events
//have to use an event lisner

*/
// have to use .addEventListener  and in ( ) define  it is  listening for this is a
// click  and you have to then define what  the event does with a function .
// define what the secreit number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Refactor same code in to function
//message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// body color function
const displayBackground = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};
//Secret number function
const numberSecret = function (number) {
  document.querySelector('.number').textContent = number;
};
//Syle with function
const syleWidth = function (syle) {
  document.querySelector('.number').style.width = syle;
};
// score function
const scoreText = function (score) {
  document.querySelector('.score').textContent = score;
};

// click event to check match number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is know  input
  if (!guess) {
    displayMessage('No number ! ');
    // document.querySelector('.message').textContent = 'No number !';
  } else if (guess === secretNumber) {
    //
    //When Player wins
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct');
    numberSecret(secretNumber);
    displayBackground('#60b347');

    syleWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guss is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // used ternary operator
      displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low  ! ');
      score--;
      scoreText(score);
    } else {
      displayMessage('You Lost the Game');
      // document.querySelector('.message').textContent = 'You Lost the Game  !';
      scoreText(0);
      displayBackground('#860111');
      syleWidth('30rem');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  // document.querySelector('.message').textContent = 'Start Guessing... ';
  scoreText(score);
  numberSecret('?');
  document.querySelector('.guess').value = '';
  displayBackground('#222');
  syleWidth('15rem');
});
