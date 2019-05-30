import { startGame, getRandomInt } from '..';

const description = 'What number is missing in the progression?';
const progressionLen = 10;

const generateGameParameters = () => {
  let startNumber = getRandomInt(10, 100);

  const delta = getRandomInt(1, 5);
  const arr = [];

  for (let i = 0; i < progressionLen; i += 1) {
    startNumber += delta;
    arr.push(startNumber);
  }

  const randomNumber = getRandomInt(0, arr.length);
  const answer = arr[randomNumber].toString();

  arr[randomNumber] = '..';

  const question = arr.join(' ');

  return [question, answer];
};

export default () => startGame(generateGameParameters, description);
