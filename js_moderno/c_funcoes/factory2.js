function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook Asus', 3699.00));
console.log(criarProduto('Notebook Dell', 2375.99));
console.log(criarProduto('Notebook Acer', 1899.49));