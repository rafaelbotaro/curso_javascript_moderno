const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));   //  Number aqui é função
console.log(Number.isInteger(peso2));   //  e está verficando se numero é inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));  //  toFixed define quantos números na casa decimal
console.log(media.toString());  //  toString converte o número para String
console.log(media.toString(2));//   toString com (2) altera o número para binário
console.log(typeof media);      //  typeof mostra qual é o tipo do dado
console.log(typeof Number);   //  Number aqui é uma função JavaScript