//Função "tradicional"
function somar(x: number, y: number): number{
    return x + y;
}

console.log('O valor da soma é ' + somar(6, 4));

function dividir(x: number, y: number): number{
    return x / y;
}

console.log ('O valor da divisão é ' + dividir(6, 4));


function sub(x: number, y: number): number{
    return x - y;
}
console.log ('O valor da subtração é ' + sub(6, 4));

function mult(x: number, y: number): number{
    return x * y;
}
console.log ('O valor da multiplicação é ' + mult(6, 4));

// Função anônima

let funcao = function(x: number, y: number): number
{ 
    return x - y
}

console.log('O valor da subtração é ' + funcao(6, 1));

// Função arrow

let seta = (x: number, y: number): number =>
{
    return x * y;
};
console.log('O valor da multiplicação ' + seta(2, 9));

