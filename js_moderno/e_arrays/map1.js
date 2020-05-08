const nums = [1, 2, 3, 4, 5];
console.log(nums);

//  O MAP é um for com propósito
let resultado = nums.map(function(e){
    return e * 2;
});
console.log(resultado);

//  O MAP não transforma o array atual, ele gera um novo array transformado

const soma10 = e => e + 10;
const triplo = e =>e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

let resultado1 = nums.map(soma10);
console.log(resultado1);

let resultado2 = nums.map(triplo);
console.log(resultado2);

let resultado3 = nums.map(paraDinheiro);
console.log(resultado3);

//  Podemos combinar o uso de vários maps juntos como abaixo

resultado = nums.map(soma10).map(paraDinheiro);
console.log(resultado);

resultado = nums.map(triplo).map(soma10).map(paraDinheiro);
console.log(resultado);

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
