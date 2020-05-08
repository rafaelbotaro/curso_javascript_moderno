/*
    ao criar uma variável com var dentro de um bloco de código, essa variável estará visível fora do bloco também. Isto só não acontece quando criamos uma var dentro de uma function, pois nesse caso ela só fica visível dentro da função
*/ 

{
    {
        {
            {
                var sera = 'Sera?';
                console.log(sera);
            }
        }
    }
}
console.log(sera);


function teste(){
    var local = 123;
    console.log(local);
}

teste();
console.log(local);