let mes:Array<string> = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let dia:Array<string> = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

let sDia = (dia: string = 'Domingo') => {return dia;};
let me = (mes: string = 'Janeiro') => {return mes;};
console.log(`O mês é ${me(mes[Math.floor(Math.random()* 12)])} e o dia da semana ${sDia(dia[Math.floor(Math.random() * 6)])}`)


let mega:Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*let sor = (mega: number = 1) => {return mega;};
console.log(`O resultado da mega é ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])} ${sor(mega[Math.floor(Math.random() *11 )])}`);*/
