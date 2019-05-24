import startGame from '..';

const getRandomInt = num => Math.floor(Math.random() * num);

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameParameters = () => {
  const number = getRandomInt(100);

  return [`${number}`, (isPrime(number)) ? 'yes' : 'no'];
};

export default () => startGame(getGameParameters, rules);
