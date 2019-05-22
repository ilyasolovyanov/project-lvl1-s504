import {
  randomInt,
} from './games';

export default () => {
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
