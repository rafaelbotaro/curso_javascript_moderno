function tratarErroELancar(erro){
    throw new Error('Erro interno, vamos resolver');
    // throw 10;
    // throw true;
    // throw 'Erro 500';
    // throw{
    //    nome: erro.name;
    //    msg: erro.message;
    //    Date: new Date;
    // }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj. name.toUpperCase() + '!!!');
    }catch(e){
        tratarErroELancar(e);
    }finally{
        console.log('Final');
    }
}

const obj = {nome: 'Rafael'}
imprimirNomeGritado(obj);