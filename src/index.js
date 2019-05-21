const readlineSync = require('readline-sync');

const hello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

module.exports = hello;
