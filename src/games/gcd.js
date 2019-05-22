import {
  randomInt,
} from './games';

export default () => {
  const a = randomInt(100);
  const b = randomInt(50);
  let al = a;
  let bl = b;

  while (al !== bl) {
    if (al > bl) {
      al -= bl;
    } else {
      bl -= al;
    }
  }

  return [`${a} ${b}`, al.toString()];
};
