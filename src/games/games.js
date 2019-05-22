import readlineSync from 'readline-sync';

export const read = str => readlineSync.question(str);

export const welcome = () => (console.log('Welcome to the Brain Games!'));

export const hello = () => {
  const username = read('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

export const randomInt = num => Math.floor(Math.random() * num);
