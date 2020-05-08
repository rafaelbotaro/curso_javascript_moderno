const quaseArray = {0: 'Rafael', 1: 'Lucas', 2: 'Pedro'};
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
});

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Lucas', 'Pedro'];
console.log(quaseArray.toString(), meuArray);