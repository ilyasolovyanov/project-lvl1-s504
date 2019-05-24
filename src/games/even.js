import startGame from '..';

const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

const rules = 'Answer "yes" if number even otherwise answer "no".';

const getGameParameters = () => {
  const expression = Math.floor(Math.random() * 100);
  return [expression, isEven(expression)];
};

export default () => startGame(getGameParameters, rules);
