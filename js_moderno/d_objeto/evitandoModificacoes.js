//  Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
});
console.log('Extensível: ', Object.isExtensible(produto));  // verifica se é extensível

produto.nome = 'Borracha';
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

//  Object.seal - selar
const pessoa = {nome: 'Alessandra', idade: 49};
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = "Morais";
delete pessoa.nome;
pessoa.idade = 48;
console.log(pessoa);

/*  
    Object.freeze = selado + valores constantes - aqui as características do objeto são completamente congelada e imutáveis - são constantes
*/
