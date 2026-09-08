### დამხმარე

იმისთვის რომ მომხმარებელმა ინფორმაცია შეიყვანოთ,
დააკოპირეთ კოდი და გაუშვით პროგრამა 

const readline = require('readline');

let age

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  age = Number(await ask("Enter your age: "));

  rl.close();
}

main();
