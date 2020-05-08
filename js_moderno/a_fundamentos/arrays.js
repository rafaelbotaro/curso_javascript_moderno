const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 9.7;
console.log(valores);
console.log('Número de elementos do array: ', valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);    // em javascript um arrey é do tipo objetc