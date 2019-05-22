import { randomInt } from './games';

export default () => {
  const expression = randomInt(100);
  return [expression, (expression % 2 === 0) ? 'yes' : 'no'];
};
