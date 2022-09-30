import { Veiculo } from "./veiculo";

export class Caminhao extends Veiculo{
    tamanhoCacamba: string = 'largura: 1,80M, altura: 1,40M e comprimento: 5,30 M.'

    descarregar(){
        console.log('descarregando...');
    }
}