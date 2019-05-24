import startGame from '..';

const getRandomInt = num => Math.floor(Math.random() * num);

const rules = 'What is the result of the expression?';

const getGameParameters = () => {
  const operations = ['plu', 'min', 'mul'];
  const operation = operations[getRandomInt(operations.length)];
  const a = getRandomInt(100);
  const b = getRandomInt(50);

  let retunContainer;
  let answer;

  switch (operation) {
    case 'plu':
      answer = (a + b).toString();
      retunContainer = [`${a} + ${b}`, answer];
      break;
    case 'min':
      answer = (a - b).toString();
      retunContainer = [`${a} - ${b}`, answer];
      break;
    default:
      answer = (a * b).toString();
      retunContainer = [`${a} * ${b}`, answer];
  }

  return retunContainer;
};

export default () => startGame(getGameParameters, rules);
