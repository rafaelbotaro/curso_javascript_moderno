function area(altura, largura){
    const area = altura * largura;
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`);
    }else{
        return `Area total: ${area}m2`;
    }
}

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 17, 22, 44));
console.log(area(5, 5));
