//hoisting significa içar a variável quando declarada com var com let não funciona

console.log('a = ', a);
var a = 2;
console.log('a = ', a);

// console.log('b = ', b); -->  aqui temos um erro por isso comentado
let b = 2;
console.log('b = ', b);
