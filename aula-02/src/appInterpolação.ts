let nome: string = 'Nicolas'

console.log('O nome dessa pessoa é ' + nome);
console.log(`O nome dessa pessoa é ${nome}`);
console.log(`A soma dos números ${4 + 6}`);



//Interpolaçao Funçao
let temMaisTitulos = function(titulos : number) : boolean{
    return titulos > 35;
}

let numero = 8;
console.log(`Ter ${numero} é suficiente para passar o Lucas ? ${temMaisTitulos(8) ? 'SIM': 'NÃO'}`);

//Arrow Function

let escreva = (valor: string) => console.log(`O nome é ${valor}`);
escreva('João ninguem');