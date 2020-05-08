let valor;  // declarada mas não inicializada assim ela aparece como indefinida
console.log(valor);

valor = null;   // aqui valor foi inicializada com o valor null que não aponta pra nenhum local de memória - ausencia de valor - usar null para zerar valor de variável
console.log(valor);
// console.log(valor.toString()); // Ao tentar acessar um valor nulo dá um erro

const produto = {}
console.log(produto.preco); //Aqui aparece indefinido, pois o preço do produto ainda não foi definido, mas o produto já foi criado
console.log(produto)

produto.preco = 3.5;
console.log(produto.preco);

produto.preco = undefined; // evitar atribuir undefined
console.log(!!produto.preco);
//delete produto.preco; // para tirar o atributo de um objeto usar o delete
console.log(produto);

produto.preco = null;   // produto sem preço. isso é correto para usar
console.log(!!produto.preco);
console.log(produto);