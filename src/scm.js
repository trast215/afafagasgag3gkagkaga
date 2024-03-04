import readlineSync from 'readline-sync';

function LCM(num1, num2, num3) {
  const arr = [num1, num2, num3];
  const n = arr.length;
  let a = Math.abs(arr[0]);
  for (let i = 1; i < n; i += 1) {
    let b = Math.abs(arr[i]);
    const c = a;
    while (a && b) {
      if (a > b) {
        a %= b;
      } else b %= a;
    }
    a = Math.abs(c * arr[i]) / (a + b);
  }
  return a;
}

const SCM = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const random = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);
  console.log('Find the smallest common multiple of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = random(1, 100);
    const number2 = random(1, 100);
    const number3 = random(1, 100);
    console.log(`Question: ${number1}, ${number2}, ${number3}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(LCM(number1, number2, number3));
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
export default SCM;
