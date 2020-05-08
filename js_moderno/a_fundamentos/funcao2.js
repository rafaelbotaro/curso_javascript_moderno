//  armazenando uma função em uma variável

const imprimirSoma = function(a, b){
    console.log(a + b);
}
imprimirSoma(2, 3);


//  armazenando uma função com arrow function em uma variável

const soma = (a, b) =>{
    return a + b;
}
console.log(soma(2, 3));


//  retorno implícito com arrow function

const subtracao = (a, b) => a - b;  //  com duas variáveis
console.log(subtracao(2, 3));

const imprimir = a => console.log(a);   //  com uma variável
imprimir('Legal!!!')
