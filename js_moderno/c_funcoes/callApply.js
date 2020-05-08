/*  

    A diferença entre o Call e Apply está na forma como passamos os parâmetros na hora de invocar a função a partir desses dois métodos

*/

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4500,
    desc: 0.15,
    getPreco
}

global.preco = 3000;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());


// A partir daqui exemplos de Call e Apply

const carro = {preco: 35000, desc: 0.2}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.25, '$'));
console.log(getPreco.apply(carro, [0.25, '$']));
