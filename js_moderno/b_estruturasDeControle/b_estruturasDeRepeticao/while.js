//  O WHILE é mais usado quando temos uma quantidade indeterminada de repetições

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10);;
    console.log(`A opção sorteada foi ${opcao}.`);
}

console.log('Até a próxima!');
