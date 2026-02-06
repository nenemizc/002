import { beolvas } from "./beolvas.js";

const termek = beolvas("petrik-termek.csv");

termek.forEach(t => {
    console.log(t.toString());
});