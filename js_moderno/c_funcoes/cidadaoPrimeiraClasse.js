//  FUNÇÃO em JS é tratado como Fisrt-Class Object (Citizens)
//  Higher-order function

//  Criar de forma literal
function fun1(){ }

//  Criar armazendo em uma variável
const fun2 = function(){ }

//  Criar armazenando dentro de um array
const array = [function(a, b) {return a + b}, fun1, fun2];
console.log(array[0](2, 3));

//  Criar armazenando em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa!'}
console.log(obj.falar());

//  Passar função como parâmetro para dentro de outra função
function run(fun){
    fun()
}
run(function(){console.log('Executando...')});

//  Uma função pode retornar/conter uam função
function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}
soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);