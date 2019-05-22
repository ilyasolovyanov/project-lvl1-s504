import {
  randomInt,
} from './games';


export default () => {
  const a = randomInt(100);
  const d = randomInt(5);
  const n = 10;
  const str = [];
  let counter = a;

  for (let i = 0; i < n; i += 1) {
    counter += d;
    str.push(counter);
  }

  const randomNum = randomInt(str.length);
  const correctAnswer = str[randomNum];
  str[randomNum] = '..';

  return [`${str}`.replace(/,/g, ' '), correctAnswer.toString()];
};
