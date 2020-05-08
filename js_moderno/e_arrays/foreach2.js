//  Criando nosso próprio FOREACH - forEach2

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}

const aprovados = ['Ana', 'José', 'Maria', 'João'];

aprovados.forEach2(function(nome, indice){
    console.log(`${indice +1}) ${nome}`);
});
