import {
  randomInt,
} from './games';


export default () => {
  let a = randomInt(100);
  const d = randomInt(5);
  const n = 10;
  const str = [];

  for (let i = 0; i < n; i += 1) {
    a += d;
    str.push(a);
  }

  const randomNum = randomInt(str.length);
  const correctAnswer = str[randomNum];
  str[randomNum] = '..';

  return [`${str}`.replace(/,/g, ' '), correctAnswer.toString()];
};
