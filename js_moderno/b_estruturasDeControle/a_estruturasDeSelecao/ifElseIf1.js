const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!');
    }else if(nota >= 5 && nota <= 6.99){
        console.log('Recuperação!');
    }else{
        console.log('Reprovado!');
    }
}
imprimirResultado(3);
imprimirResultado(6);
imprimirResultado(8);
