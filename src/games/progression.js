import startGame from '..';
import getRandomInt from '../utils/random';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateGameData = () => {
  let firstProgressionElement = getRandomInt(10, 100);

  const difference = getRandomInt(1, 5);
  const progression = [firstProgressionElement];

  for (let i = 0; i < progressionLength; i += 1) {
    firstProgressionElement += difference;
    progression.push(firstProgressionElement);
  }

  const randomProgressionElement = getRandomInt(0, progression.length - 1);
  const answer = progression[randomProgressionElement].toString();

  progression[randomProgressionElement] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

export default () => startGame(generateGameData, description);
