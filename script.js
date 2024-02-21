'use strict';

// document.querySelector('.message').textContent = 'Correct Number✨🎉 ';
// console.log((document.querySelector('.guess').value = 23));
let ranDom = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number😠😡';
  } else if (guess === ranDom) {
    document.querySelector('.message').textContent = 'Correct Number 😎😲 ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = ranDom;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== ranDom) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > ranDom
          ? (document.querySelector('.message').textContent = 'Too high !! 😒')
          : (document.querySelector('.message').textContent = 'Too low !! 😒');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER !!!';
      document.querySelector('body').style.backgroundColor = '#a84d4d';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = ranDom;
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

//   // When guess is to high
//   else if (guess > ranDom) {

//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER !!!';
//       document.querySelector('body').style.backgroundColor = '#a84d4d';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.number').textContent = ranDom;
//       document.querySelector('.number').style.width = '30rem';
//     }
//   }
//   // when guess is to low
//   else if (guess < ranDom) {
//     document.querySelector('.message').textContent = 'too low !! 😒';

//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER !!!';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = '#a84d4d';
//       document.querySelector('.number').textContent = ranDom;
//       document.querySelector('.number').style.width = '30rem';
//     }
//   }
// });
//Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  ranDom = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
