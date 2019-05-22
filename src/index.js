import readlineSync from 'readline-sync';

export const welcome = () => (console.log('Welcome to the Brain Games!'));

export const hello = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

const randomInt = num => Math.floor(Math.random() * num);

// games
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

export const gcd = () => {
  const a = randomInt(100);
  const b = randomInt(50);
  let al = a;
  let bl = b;

  while (al !== bl) {
    if (al > bl) {
      al -= bl;
    } else {
      bl -= al;
    }
  }

  return [`${a} ${b}`, al.toString()];
};

export const progression = () => {
  const a = randomInt(100);
  const d = randomInt(5);
  const n = 10;
  const str = [];
  let counter = a;

  for (let i = 0; i < n; i += 1) {
    counter += d;
    str.push(counter);
  }

  const randomNum = randomInt(str.length);
  const correctAnswer = str[randomNum];
  str[randomNum] = '..';

  return [`${str}`.replace(/,/g, ' '), correctAnswer.toString()];
};

// question checker
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
};
