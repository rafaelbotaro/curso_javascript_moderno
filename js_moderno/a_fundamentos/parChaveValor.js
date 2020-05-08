//  Par Chave(Nome / Identificador) - Valor

const saudacao = 'Olá';     //  contexto léxico 1

function exec(){
    const saudacao = 'Faaaala!';        // contexto léxico 2
    return saudacao;
}

//  Objetos  são grupos aninhados de pares chave/valor

const cliente = {
    nome: 'Rafael',
    idade: 37,
    peso: 80,
    endereco: {
        logradouro: 'Rua Santa Helena',
        numero: 909
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);