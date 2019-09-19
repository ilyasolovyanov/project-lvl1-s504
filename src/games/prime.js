import startGame from '..';
import getRandomInt from '../utils/random';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const question = getRandomInt(10, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startGame(generateGameData, rules);
