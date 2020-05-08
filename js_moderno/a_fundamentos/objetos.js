// 1 forma de criar objeto
const prod1 = {};
prod1.nome = 'Asus VivoBook';
prod1.preco = 4600;
prod1['Desconto Alto'] = 0.25; //   Evitar usar atributos com espaço
console.log(prod1);


// 2 forma de criar objeto - 1
const prod2= {
    nome: 'Camiseta',
    preco: 29.90
}
console.log(prod2);


// 2 forma de criar objeto - 2
const prod3 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    ref: {      // Um objeto dentro de outro objeto
        referencia: '0101-X',
        cor:{
            cor: 'azul',
        }
    } 
}
console.log(prod3); 