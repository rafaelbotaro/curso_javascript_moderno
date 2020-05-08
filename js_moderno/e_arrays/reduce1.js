const alunos = [
    {nome: 'José', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
];
console.log('Array com as 4 notas: '+alunos.map(a => ' '+a.nota));
console.log(' ');

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual, indice){
    console.log(indice+1+') '+acumulador, atual);
    return acumulador + atual;
}, 0);
console.log('Total: '+resultado);
