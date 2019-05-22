import readlineSync from 'readline-sync';

export const welcome = () => (console.log('Welcome to the Brain Games!'));

export const hello = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

const getRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min)) + min
);

const question = (username) => {
  const number = getRandomInt(1, 100);
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let answerContainer = false;

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    answerContainer = true;
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${username}!`);
  }
  return answerContainer;
};

export const brainEvenStart = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const username = hello();
  let win = true;
  let correctCounter = 0;
  while (correctCounter < 3) {
    if (question(username)) {
      correctCounter += 1;
    } else {
      correctCounter = 3;
      win = false;
    }
  }
  if (win) { console.log(`Congratulations, ${username}!`); }
};
