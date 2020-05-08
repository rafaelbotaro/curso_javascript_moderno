//  Criando nosso próprio FILTER - filter2

Array.prototype.filter2 = function(callback){
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
};

const produtos = [
    {nome: 'Microondas', preco: 249.99, fragil: true},
    {nome: 'Fogão', preco: 599.99, fragil: false},
    {nome: 'Liquidificador', preco: 84.99, fragil: true},
    {nome: 'Lancheteira', preco: 29.99, fragil: false}
];

const caro = produto => produto.preco >= 200;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));
