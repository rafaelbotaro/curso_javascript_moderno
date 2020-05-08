//  função declarada de forma tradicional
let dobro = function(a){
    return 2 * a;
}

//  arrow function com bloco contendo o retorno explícito
let dobro2 = (a) => {
    return 2 * a;
}

//  arrow function sem bloco e com retorno implícito
let dobro3 = a => 2 * a;

console.log(dobro3(2));


//  exemplo com string
let ola = function(){
    return 'Olá!';
}

ola2 = ()  => 'Olá!'; // o mais comum é utilizar essa escrita
olá3 = _ => 'Olá!'; //  o underline colocado no lugar dos parêntesis é um parâmetro

console.log(ola2());

//  funções arrow sempre serão funções anônimas
