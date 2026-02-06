export default class Tanterem{
    constructor(epulet, sorszam, osztaly){
        this.epulet = epulet;
        this.sorszam = sorszam;
        this.osztaly = osztaly;
    }

    ToString(){
        return `${this.epulet}, ${this.sorszam}, ${this.osztaly}`;
    }
}