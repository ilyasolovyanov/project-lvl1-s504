import readlineSync from 'readline-sync';

const rounds = 3;

export default (sartGame, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);

  if (description) {
    let win = true;
    for (let i = 0; i < rounds; i += 1) {
      const [expression, correctAnswer] = sartGame();
      console.log(`Question: ${expression}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
        console.log(`\nLet's try again, ${username}!`);
        i = rounds;
        win = false;
      }
    }
    if (win) console.log(`Congratulations, ${username}!`);
  }
};
