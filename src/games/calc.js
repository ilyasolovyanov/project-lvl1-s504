import { startGame, getRandomInt } from '..';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const generateGameParameters = () => {
  const operation = operations[getRandomInt(0, operations.length)];
  const a = getRandomInt(10, 100);
  const b = getRandomInt(1, 50);
  const question = `${a} ${operation} ${b}`;

  let answer;

  switch (operation) {
    case '+':
      answer = (a + b).toString();
      break;
    case '-':
      answer = (a - b).toString();
      break;
    default:
      answer = (a * b).toString();
  }

  return [question, answer];
};

export default () => startGame(generateGameParameters, description);
