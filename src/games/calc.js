import startGame from '..';
import getRandomInt from '../utils/random';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const generateGameData = () => {
  const operation = operations[getRandomInt(0, operations.length - 1)];
  const a = getRandomInt(10, 100);
  const b = getRandomInt(1, 50);
  const question = `${a} ${operation} ${b}`;

  let answer;

  switch (operation) {
    case '+':
      answer = (a + b);
      break;
    case '-':
      answer = (a - b);
      break;
    case '*':
      answer = (a * b);
      break;
    default:
      return false;
  }

  return [question, answer.toString()];
};

export default () => startGame(generateGameData, description);
