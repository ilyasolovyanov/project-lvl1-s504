import startGame from '..';
import getRandomInt from '../utils/random';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateGameData = () => {
  let startNumber = getRandomInt(10, 100);

  const difference = getRandomInt(1, 5);
  const progressionArray = [];

  for (let i = 0; i < progressionLength; i += 1) {
    startNumber += difference;
    progressionArray.push(startNumber);
  }

  const randomNumber = getRandomInt(0, progressionArray.length - 1);
  const answer = progressionArray[randomNumber].toString();

  progressionArray[randomNumber] = '..';

  const question = progressionArray.join(' ');

  return [question, answer];
};

export default () => startGame(generateGameData, description);
