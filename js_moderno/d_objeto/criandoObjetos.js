//  Usando notação literal
const obj1 = {}
console.log(obj1);

//  Object em JS
const obj2 = new Object();
console.log(obj2);

//  Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDesconto = ()=>{
        return preco * (1 - desc);
    }
}

const prod1 = new Produto('Caneta', 3.99, 0.15);
const prod2 = new Produto('Notebook', 3588.99, 0.2);
console.log(prod1.getPrecoComDesconto().toFixed(2));
console.log(prod2.getPrecoComDesconto().toFixed(2));

//  Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const funcionario1 = criarFuncionario('Rafael Botaro', 7899.99, 1);
const funcionario2 = criarFuncionario('Wallace Maldonado', 5470.50, 4);
console.log(funcionario1.getSalario().toFixed(2));
console.log(funcionario2.getSalario().toFixed(2));


//  Object.create
const filha = Object.create(null);
filha.nome = 'Maria';
console.log(filha);

//  Uma função famosa que retorna um Objeto
const fromJSON = JSON.parse('{"info":"Eu sou um JSON"}');
console.log(fromJSON);
console.log(fromJSON.info);
