const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i in notas){
    console.log(`Nota no índice ${i}: ${notas[i]}`);
}

console.log('');

const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Botaro',
    idade: 37,
    peso: 80
}

for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`);
}
