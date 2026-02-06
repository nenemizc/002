import fs from 'node:fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tomb = [];

rl.question("Adja meg az adatok számát: ", (answer) => {
    let darab = answer;
    for (let i = 0; i < darab; i++){
        let adat = Math.floor(Math.random() * (200 - 150 + 1) + 150);
        console.log(adat);
        tomb.push(adat);
    }
    rl.close();
});







