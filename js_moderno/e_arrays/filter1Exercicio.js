const produtos = [
    {nome: 'Microondas', preco: 249.99, fragil: true},
    {nome: 'Fogão', preco: 599.99, fragil: false},
    {nome: 'Liquidificador', preco: 84.99, fragil: true},
    {nome: 'Lancheteira', preco: 29.99, fragil: false}
];

const caro = produto => produto.preco >= 200;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
