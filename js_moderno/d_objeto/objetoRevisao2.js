//  Exemplo mais completo, mais sofisticado

const carro ={
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Rafael Botaro',
        idade: 37,
        seguro: true,
        endereco:{
            logradouro: 'Rua Santa Helena',
            numero: 909,
            complemento: 'Casa E-85',
            bairro: 'Jd. Alvorada'
        }
    },
    condutores:[{
        nome: 'Alessandra',
        idade: 48
    },{
        nome: 'Valéria',
        idade: 47
    }],

    calcularValorSeguro: function(){
        // bloco de código...
    }

}

carro.modelo = 'Audi A4';   //  acessando com operador ponto
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Rua Sta. Helena';    //  acessando com stings
console.log(carro);

console.log(' ');

delete carro.calcularValorSeguro;
delete carro.condutores;
console.log(carro);

/*
    console.log(carro.condutores);
    console.log(carro.condutores.length);

    Ao tentar acessar o carro.condutores, o node retornará undefined, pois os condutores foram excluidos com o método delete na linha 38.

    Cuidado ao tentar acessar atributos de elementos que não existem como acima no condutores.length. Como condutores estão indefinidos, ele retornará um erro.
*/
