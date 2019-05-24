import startGame from '..';

const getRandomInt = num => Math.floor(Math.random() * num);

const getGCD = (a, b) => {
  if (a === 0) return b;
  return getGCD(b % a, a);
};

const rules = 'Find the greatest common divisor of given numbers.';

const getGameParameters = () => {
  const a = getRandomInt(100);
  const b = getRandomInt(50);

  return [`${a} ${b}`, getGCD(a, b).toString()];
};

export default () => startGame(getGameParameters, rules);
