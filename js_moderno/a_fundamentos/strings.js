const escola = "Cod3r";

console.log(escola.charAt(4));  //charAt pega a letra que é referenciada no parêntesis
console.log(escola.charAt(5));  //charAt não da erro se não tem a referência passada

console.log(escola.charCodeAt(3));  //charCodeAt pega a referência unicode
console.log(escola.indexOf('3'));   //indexOf busca na palavra o valor passado 

console.log(escola.substring(1)); //substring imprime a partir do numero passado
console.log(escola.substring(0, 3)); //substring aqui vai do 0 ao índice 2 - sem o 3

console.log('Escola '.concat(escola).concat("!"));//concat concatena literal com variaveis
console.log('Escola ' + escola + "!");//concatenando com mais

console.log(escola.replace(3, 'e')); //replace substitui o índice pelo literal passado
console.log('Ana, Maria, Pedro'.split(' , '));//split transforma string em arrays