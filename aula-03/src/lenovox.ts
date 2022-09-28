import { Gamer, Laptop } from "./computador-base";

class lenovox extends Laptop implements Gamer{
    memoriaVideo: number = 512;
    
    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor} pontos`);
    }    
}
