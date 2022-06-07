'use strict';
// select element
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const dicsEL = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonroll = document.querySelector('.btn--roll');
const buttonhold = document.querySelector('.btn--hold');

let scores, currentScore,active,activeplayer,playing;


const newplay = function () {
  scores = [0, 0];
  currentScore = 0;
  activeplayer = 0;
  playing = true;
  activeplayer = 0;

  dicsEL.classList.add('hide');
  document.querySelector(`#score--1`).textContent =0;
  document.querySelector(`#score--0`).textContent =0;
player0EL.classList.remove('player--winner');
player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');

    currentScore = 0;
  document.getElementById(`current--${activeplayer}`).textContent =
    currentScore;
};
  newplay();

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;

  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};





score0EL.textContent = 0;
score1EL.textContent = 0;
dicsEL.classList.add('hide');

buttonroll.addEventListener('click', function () {
  if (playing) {
    // generation random
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display result
    dicsEL.classList.remove('hide');
    dicsEL.src = `dice-${dice}.png`;

    // chick if it is 1: swich to onother player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchplayer();
    }
  }
});

buttonhold.addEventListener('click', function () {
  if (playing) {
    // hold score
    scores[activeplayer] += currentScore;
    document.querySelector(`#score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      dicsEL.classList.add('hide');
    } else {
      switchplayer();
    }
  }
});


buttonNew.addEventListener('click',newplay)


