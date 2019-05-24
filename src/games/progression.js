import startGame from '..';

const getRandomInt = num => Math.floor(Math.random() * num);

const rules = 'What number is missing in the progression?';

const getGameParameters = () => {
  let startNumber = getRandomInt(100);
  const delta = getRandomInt(5);
  const strLen = 10;
  const str = [];

  for (let i = 0; i < strLen; i += 1) {
    startNumber += delta;
    str.push(startNumber);
  }

  const randomNumber = getRandomInt(str.length);
  const correctAnswer = str[randomNumber];
  str[randomNumber] = '..';

  return [`${str}`.replace(/,/g, ' '), correctAnswer.toString()];
};

export default () => startGame(getGameParameters, rules);
