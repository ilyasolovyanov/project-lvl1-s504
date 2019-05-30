import { startGame, getRandomInt } from '..';

const getGCD = (a, b) => {
  if (a === 0) return b;
  return getGCD(b % a, a);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateGameParameters = () => {
  const a = getRandomInt(10, 100);
  const b = getRandomInt(1, 50);
  const question = `${a} ${b}`;
  const answer = getGCD(a, b).toString();

  return [question, answer];
};

export default () => startGame(generateGameParameters, description);
