//  coleção dinâmica de pares chave/valor

//  Exemplo simples

const produto = new Object;
produto.nome = 'Cadeira';
produto['Marca do produto'] = 'Genérica';
produto.preco = 45;

console.log(produto);
delete produto.preco;
delete produto['Marca do produto'];
console.log(produto);
