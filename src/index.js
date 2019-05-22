import readlineSync from 'readline-sync';

export const welcome = () => (console.log('Welcome to the Brain Games!'));

export const hello = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

const randomInt = num => Math.floor(Math.random() * num);

export const even = () => {
  const expression = randomInt(100);
  return [expression, (expression % 2 === 0) ? 'yes' : 'no'];
};

export const calc = () => {
  const operations = ['plu', 'min', 'mul'];
  const operation = operations[randomInt(operations.length)];
  const a = randomInt(100);
  const b = randomInt(50);

  let retunContainer;

  switch (operation) {
    case 'plu':
      retunContainer = [`${a} + ${b}`, (a + b).toString()];
      break;
    case 'min':
      retunContainer = [`${a} - ${b}`, (a - b).toString()];
      break;
    default:
      retunContainer = [`${a} * ${b}`, (a * b).toString()];
  }

  return retunContainer;
};

const question = (core, username) => {
  const coreContainer = core();
  const expression = coreContainer[0];
  const correctAnswer = coreContainer[1];
  console.log(`Question: ${expression}`);
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

export const startGame = (log, core, rounds) => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const username = hello();
  let win = true;
  let correctCounter = 0;
  while (correctCounter < rounds) {
    if (question(core, username)) {
      correctCounter += 1;
    } else {
      correctCounter = rounds;
      win = false;
    }
  }
  if (win) { console.log(`Congratulations, ${username}!`); }
};

export const logs = {
  even: {
    log: 'Answer "yes" if number even otherwise answer "no".',
    core: even,
  },
  calc: {
    log: 'What is the result of the expression?',
    core: calc,
  },
};
