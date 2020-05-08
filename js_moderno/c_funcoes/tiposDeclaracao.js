console.log(soma(3, 4));

//  function declaration - declaração de função
//  retorna (imprime) os valores processados mesmo antes de ter declarado a função
function soma(x, y){
    return x + y;
}


//  function expression
//  só retorna (imprime) os valores processados depois de ter declarado a função
const sub = function(x, y){
    return x - y;
}
console.log(sub(3, 4));


//  named function expression - uso reduzido, por isso não usar
//  só retorna (imprime) os valores processados depois de ter declarado a função
const mult = function mult(x, y){
    return x * y;
}
console.log(mult(3, 4));
