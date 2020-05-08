function Carro(velocidadeMaxima = 200, delta = 10){
    let velocidadeAtual = 0;

    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}

const uno = new Carro();
uno.acelerar();
console.log('Velocidade do Uno: '+uno.getVelocidadeAtual()+' Km/h');

const ferrari = new Carro(350, 40); 
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log('Velocidade da Ferrari: '+ferrari.getVelocidadeAtual()+' Km/h');
