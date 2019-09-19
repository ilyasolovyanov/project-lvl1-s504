import startGame from '..';
import getRandomInt from '../utils/random';

const isEven = num => (num % 2 === 0);

const description = 'Answer "yes" if number even otherwise answer "no".';

const generateGameData = () => {
  const question = getRandomInt(10, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(generateGameData, description);
