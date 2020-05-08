//  Get e Set garante um encapsulamento maior para o programa/objeto

const sequencia = {
    _valor: 1, //  é convenção marcar com underline a variável get e set
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900; //   se tento passar um valor menor, a função não aceita
console.log(sequencia.valor, sequencia.valor);
