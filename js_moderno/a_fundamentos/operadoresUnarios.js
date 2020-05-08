let num1 = 1;
let num2 = 2;

//  forma pós-fixada - precedência menor
num1++;
console.log(num1);

//  forma pré-fixada - precedência maior
--num1;
console.log(num1);

console.log(++num1 === num2--);
console.log(num1 === num2);
