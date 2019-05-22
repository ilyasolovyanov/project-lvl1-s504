import {
  randomInt,
} from './games';

export default () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
    return num > 1;
  };

  const number = randomInt(100);

  return [`${number}`, (isPrime(number)) ? 'yes' : 'no'];
};
