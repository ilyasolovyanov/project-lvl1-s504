import {
  welcome,
  read,
  hello,
} from './games/games';

import even from './games/even';
import calc from './games/calc';
import gcd from './games/gcd';
import prime from './games/prime';
import progression from './games/progression';

// question checker
const question = (core, username) => {
  const coreContainer = core();
  const expression = coreContainer[0];
  const correctAnswer = coreContainer[1];
  console.log(`Question: ${expression}`);
  const userAnswer = read('Your answer: ');
  let answerContainer = false;

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    answerContainer = true;
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${username}!`);
  }
  return answerContainer;
};

// game start
export const startGame = (game, rounds) => {
  welcome();
  console.log(game.log);
  const username = hello();
  let win = true;
  let correctCounter = 0;
  while (correctCounter < rounds) {
    if (question(game.core, username)) {
      correctCounter += 1;
    } else {
      correctCounter = rounds;
      win = false;
    }
  }
  if (win) { console.log(`Congratulations, ${username}!`); }
};

// games logs
export const logs = {
  even: {
    log: 'Answer "yes" if number even otherwise answer "no".',
    core: even,
  },
  calc: {
    log: 'What is the result of the expression?',
    core: calc,
  },
  gcd: {
    log: 'Find the greatest common divisor of given numbers.',
    core: gcd,
  },
  progression: {
    log: 'What number is missing in the progression?',
    core: progression,
  },
  prime: {
    log: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    core: prime,
  },
};
