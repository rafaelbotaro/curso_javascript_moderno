/*  
    Array em JS é um objeto especial que trabalha de forma indexada [0, 1, 2, 3, 4, ...]
    Array em JS é uma estrutura dinâmica, cresce e diminui conforme se add ou exclui elementos, diferente de Java, por exemplo

*/
console.log(typeof Array, typeof new Array, typeof []);
console.log('');

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);
aprovados.sort();
console.log(aprovados);

aprovados.pop(9);
aprovados.pop(8);
aprovados.pop(7);
aprovados.pop(6);
aprovados.pop(5);
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1);
console.log(aprovados);
