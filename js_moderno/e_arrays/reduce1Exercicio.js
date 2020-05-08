const serHumano = [
    {nome: 'José', idade: 73},
    {nome: 'Maria', idade: 32},
    {nome: 'Pedro', idade: 28},
    {nome: 'João', idade: 18},
    {nome: 'Marta', idade: 19},
    {nome: 'Eder', idade: 24},
    {nome: 'Lara', idade: 53},
    {nome: 'Zefa', idade: 62},
    {nome: 'Carlos', idade: 48},
    {nome: 'Ana', idade: 37}
];
console.log(serHumano.map(a => a.idade));

const resultado = serHumano.map(a => a.idade).reduce(function(acumulador, atual, indice){
    console.log(indice+1+') '+acumulador, atual);
    return acumulador + atual;
}, 0);
console.log('A soma das idades é '+resultado+' anos.');

mediaIdades = resultado / serHumano.length;
console.log('A média das idades é '+mediaIdades+' anos.');
