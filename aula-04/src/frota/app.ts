import { Caminhao } from "./caminhao";
import { Moto } from "./moto";



let caminhoneiro = new Caminhao('Preto', 'Mercedes-Benz', 'Axor');
let motox = new Moto('Preta', 'Yamaha', 'MT 03 ');

console.log(`O caminhão ${caminhoneiro.modelo} é o mais atual do mercado, é produzido pela empresa ${caminhoneiro.fabricante}. A cor escolhida pelo caminhoneiro foi ${caminhoneiro.cor}, como sua especialidade é em transporte de materiais agriculas, decidiu comprar uma caçamba de ${caminhoneiro.tamanhoCacamba}`);

console.log(`Uber eats comprou uma moto ${motox.fabricante} do modelo ${motox.modelo}, de cor ${motox.cor}! Ele começou a trabalhar.`);

 
caminhoneiro.acelerar();
motox.parar();
caminhoneiro.descarregar();
motox.empinar();