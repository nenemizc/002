import fs from 'node:fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let magassagok = [];

rl.question("Adja meg az adatok számát: ", (answer) => {
    let darab = answer;
    for (let i = 0; i < darab; i++){
        let adat = Math.floor(Math.random() * (200 - 150 + 1) + 150);
        magassagok.push(adat);
        magassagok = magassagok.sort();
    }
    
    for (let i = 0; i < magassagok.length;i++){
        console.log(magassagok[i]);
        fs.writeFileSync('./magassagok.txt',magassagok[i].toString() + '\n',{ flag: 'a' });
    }
    rl.close();
});







