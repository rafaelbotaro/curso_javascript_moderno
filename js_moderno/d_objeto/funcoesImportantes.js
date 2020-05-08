// Funções importantes de OBJECT acessadas com notação ponto (Object.)

const pessoa = {
    nome: 'Rafael',
    idade: 37,
    peso: 80
}

console.log(Object.keys(pessoa));        //  imprime as chaves (keys)
console.log(Object.values(pessoa));     //  imprime os valores (values)
console.log(Object.entries(pessoa));    //  imprime chave/valor como elemento de array

//  buscando elementos do array com (e) (e de elemento)
Object.entries(pessoa).forEach((e) => {
    console.log(`${e[0]}: ${e[1]}`);
});

//  buscando elementos com destructuring (([chave, valor]) - mais descritivo
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento',{    //  define propriedades
    enumerable: true,   //  aqui podemos alterar os valores true e false
    writable: false,    //  aqui podemos alterar os valores true e false
    value: '01/01/2010'
});

pessoa.dataNascimento = '20/10/2020';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//  Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2);
console.log(obj); 
// com ASSIGN os objetos declarado são passados todos para o objeto de destino concatenados e os declarados novamente como o a: 4 na linha 34, sobreescrevem os declarados anteriormente, como o a: 1 na linha 32

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
