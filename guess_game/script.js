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
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

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
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

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
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game');
      // document.querySelector('.message').textContent = 'You Lost the Game  !';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#860111';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  // document.querySelector('.message').textContent = 'Start Guessing... ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
