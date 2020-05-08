const nome =   'Rebeca';
const concatenacao = 'Olá '+nome+'!';
const template = `
    Olá
    ${nome}!`;
const template2 = `Olá ${nome}!`;

console.log(concatenacao);
console.log(template);
console.log("");
console.log(template2);

//Expressões...
console.log("");
console.log(`1 + 1= ${1 + 1}`);

console.log("");

//Usando template string dentro de função
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up ('cuidado')}!`);