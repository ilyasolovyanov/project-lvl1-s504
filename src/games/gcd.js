import startGame from '..';

const getRandomInt = num => Math.floor(Math.random() * num);

const getGCD = (a, b) => {
  let al = a;
  let bl = b;

  while (al !== bl) {
    if (al > bl) {
      al -= bl;
    } else {
      bl -= al;
    }
  }

  return al;
};

const rules = 'Find the greatest common divisor of given numbers.';

const getGameParameters = () => {
  const a = getRandomInt(100);
  const b = getRandomInt(50);

  return [`${a} ${b}`, getGCD(a, b).toString()];
};

export default () => startGame(getGameParameters, rules);
