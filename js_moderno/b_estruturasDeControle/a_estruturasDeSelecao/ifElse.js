const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!');
    }else{
        console.log('Reprovado!');
    }
}
imprimirResultado(6);
imprimirResultado(8);
imprimirResultado('Epa!');  //Tomar cuidado nesse cenário com linguagem fracamente tipada, já que ele vai comparar com o 7 do if, vai ver que não dá pra comparar string com number e irá retornar false, e ao final irá apresentar o resultado como reprovado e não como um erro. Linguagens fortemente tipadas apresentam erro. Aqui é preciso fazer um tratamento de erro.
