//  Novo recurso ES2015

const pessoa = {
    nome: 'Rafael',
    idade: 37,
    endereco: {
        logradouro: 'Rua Santa Helena',
        numero: 909
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);

/* cuidado ao tentar acessar elementos que não foram definidos ou que não estão aninhados. Isso gerará um erro. è precisso garantir que o dado estja setado. Exemplo:

const {conta: {agencia, numero}} = pessoa;
console.log(agencia, numero);

*/