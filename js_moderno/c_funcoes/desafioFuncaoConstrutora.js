// Class
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Rafael');
p1.falar();


// Função Construtora
function Pessoa2(nome){
    this.nome = nome;

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa('Rafael');
p2.falar();

//  Em JS podemos criar objetos através de Classes, Função Construtora e Factory
