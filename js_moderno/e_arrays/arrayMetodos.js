const alunos = ['Rafael', 'José', 'João', 'Carlos', 'Eduardo'];
console.log(alunos);

alunos.pop();   //  O método POP retira o último elemento do array
console.log(alunos);

alunos.push('Pedro');   //  O método PUSH insere um elemento após o último do array
console.log(alunos);

alunos.shift(); //  O método SHIFT retira o primeiro elemento do array
console.log(alunos);

alunos.unshift('Paulo');  //  O método UNSHIFT insere um elemento como primeiro do array
console.log(alunos);

//  O método SPLICE é usado para adicionar e remover elementos do array

//  Adicionar elemento
alunos.splice(2, 0, 'Rafael', 'Marcos');
console.log(alunos);

//  Remover elemento
alunos.splice(3, 1);
console.log(alunos);

//  O método SLICE é usado para criar um novo array a partir de um já existente

const algunsAlunos1 = alunos.slice(3);
console.log(algunsAlunos1);

const algunsAlunos2 = alunos.slice(0, 3);   // o 3 não entra, é até o elemento 2
console.log(algunsAlunos2);