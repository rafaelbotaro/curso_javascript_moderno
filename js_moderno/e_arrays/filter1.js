const produtos = [
    {nome: 'Prato de vidro', preco: 7.99, fragil: true},
    {nome: 'Prato de plástico', preco: 3.99, fragil: false},
    {nome: 'Copo de vidro', preco: 4.99, fragil: true},
    {nome: 'Copo de plástico', preco: 1.99, fragil: false},
    {nome: 'Microondas', preco: 249.99, fragil: true},
    {nome: 'Fogão', preco: 599.99, fragil: false},
    {nome: 'Liquidificador', preco: 84.99, fragil: true},
    {nome: 'Lancheteira', preco: 29.99, fragil: false}
];

console.log(produtos.filter(function(p){
    return p.fragil === false && p.preco >= 50;
}));

console.log(produtos.filter(function(p){
    return p.fragil && p.preco <= 150;
}));
