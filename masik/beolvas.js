import fs from 'node:fs';
import Tanterem from './Tanterem.js';

export function beolvas(fajlnev){
     const tartalom = fs.readFileSync(fajlnev, "utf-8");
    
    const sorok = tartalom.trim().split("\n");
    const termek = [];

    for (let i = 1; i < sorok.length; i++) {
        const sor = sorok[i].split(";");
    
        const epulet = sor[0];
        const sorszam = sor[1];
        const osztaly = sor[2];
    
        termek.push(new Tanterem(epulet, sorszam, osztaly));
    }
    
    return termek;
}