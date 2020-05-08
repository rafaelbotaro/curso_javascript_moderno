const imprimirResultado = function(nota){
    if(nota >= 8){
        console.log('Conceito A');
    }else if(nota >= 6){
        console.log('Conceito B');
    }else if(nota >= 4){
        console.log('Conceito C');
    }else if(nota >= 2){
        console.log('Conceito D');
    }else{
        console.log('Conceito E');
    }
}
imprimirResultado(3);
imprimirResultado(6);
imprimirResultado(8);
