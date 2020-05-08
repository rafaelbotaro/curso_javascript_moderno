function teste1(num){
    if (num >= 7){
        console.log(num);
        console.log('Fim');
    }
}
teste1(6);
teste1(7);
console.log('');


function teste2(num){
    if(num >= 7)    //sempre usar as chaves {} para delimitar blocos
        console.log(num);
    console.log('Fim');
}
teste2(6);
teste2(7);
console.log('');


function teste3(num){
    if(num >= 7); { //cuidado com o ';' , não usar com as estruturas de controle
        console.log(num);
        console.log('Fim');
    }
}

teste3(6);
teste3(7);