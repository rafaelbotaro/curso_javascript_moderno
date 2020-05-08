//  pessoa -> 123 -> {...}
const pessoa = {nome: 'Rafael'}
pessoa.nome = 'Rafael Botaro';
console.log(pessoa);

//  pessoa -> 456 -> {...}
//  pessoa = 'Maria';

Object.freeze(pessoa); //   o FREEZE congela o objeto não permitindo alterá-lo

pessoa.nome = 'José';
pessoa.end = 'Rua das Flores'
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'Rafael'});
pessoaConstante.nome = 'Rafael Botaro';
console.log(pessoaConstante);
