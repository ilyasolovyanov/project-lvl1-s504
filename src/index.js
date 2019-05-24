import readlineSync from 'readline-sync';

export default (game, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);

  if (rules !== '') {
    const rounds = 3;
    let win = true;
    for (let i = 0; i < rounds; i += 1) {
      const gameContainer = game();
      const expression = gameContainer[0];
      const correctAnswer = gameContainer[1];
      console.log(`Question: ${expression}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${username}!`);
        i = rounds;
        win = false;
      }
    }
    if (win) console.log(`Congratulations, ${username}!`);
  }
};
