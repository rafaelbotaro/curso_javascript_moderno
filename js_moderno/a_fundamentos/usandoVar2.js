// Em JavaScript sempre fuja do escopo global
// Variáveis definidas com var tem escopo global

var num = 1;
{
    var num = 2;
    console.log('Dentro = ', num);
}
console.log('Fora = ', num);
