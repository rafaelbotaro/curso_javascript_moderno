function Carro(velocidadeMaxima = 200, delta = 5){
    //  atributo privado
    let velocidadeAtual = 0;

    //  método público
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //  método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}

//  instanciando um novo objeto carro (Uno) com parâmetros definidos na função Carro
const uno = new Carro();
uno.acelerar(); //   chamando a função acelerar
console.log(uno.getVelocidadeAtual());  //  imprimindo a velocidade atual do carro

//  instanciando um novo objeto carro (Ferrari) e passando velocidades por parâmetro
const ferrari = new Carro(350, 20); 
ferrari.acelerar(); //   chamando a função acelerar
ferrari.acelerar(); //   chamando a função acelerar
ferrari.acelerar(); //   chamando a função acelerar
console.log(ferrari.getVelocidadeAtual()); //  imprimindo a velocidade atual do carro

console.log(typeof Carro);
console.log(typeof ferrari);