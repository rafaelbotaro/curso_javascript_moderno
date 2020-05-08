function somaDosArgumentos(){
    let soma = 0;
    for(let i in arguments){    //ARGUMENTS é um array interno de JS 
        soma += arguments[i];
    }
    return soma;
}
console.log(somaDosArgumentos());
console.log(somaDosArgumentos(1));
console.log(somaDosArgumentos(1.1, 2.2, 3.3));
console.log(somaDosArgumentos(1.1, 2.2, 'Test'));
console.log(somaDosArgumentos('a', 'b', 'c'));