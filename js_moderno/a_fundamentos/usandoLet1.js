/* 
    Variáveis definidas com let tem escopo local e é preferível usá-las para não ocorrer erros no código, já que com var é possível sobreescrever uma variável
*/

let num = 1;
{
    let num = 2;
    console.log('Dentro = ', num);
}
console.log('Fora = ', num);
