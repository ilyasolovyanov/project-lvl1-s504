import { startGame, getRandomInt } from '..';

const isEven = num => (num % 2 === 0);

const description = 'Answer "yes" if number even otherwise answer "no".';

const generateGameParameters = () => {
  const question = getRandomInt(10, 100);
  const answer = (isEven(question)) ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(generateGameParameters, description);
