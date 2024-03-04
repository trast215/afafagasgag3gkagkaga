import readlineSync from 'readline-sync';

const replaceAll = (string, search, replace) => string.split(search).join(replace);

const PROGRESSION = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const random = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    let number = random(50);
    const seq = random(11, 5);
    const skip = random(seq);
    const difference = random(21, -20);
    let progression = [];
    let count = 0;
    while (count !== seq) {
      progression.push(number);
      number += difference;
      count += 1;
    }
    const correctAnswer = String(progression[skip]);
    progression = String(progression);
    const question = replaceAll(progression, ',', ' ').replace(correctAnswer, '..');
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n
          Let's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default PROGRESSION;
