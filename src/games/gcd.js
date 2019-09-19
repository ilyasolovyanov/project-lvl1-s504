import startGame from '..';
import getRandomInt from '../utils/random';

const getGcd = (a, b) => {
  if (a === 0) return b;
  return getGcd(b % a, a);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const a = getRandomInt(10, 100);
  const b = getRandomInt(1, 50);
  const question = `${a} ${b}`;
  const answer = getGcd(a, b).toString();

  return [question, answer];
};

export default () => startGame(generateGameData, description);
