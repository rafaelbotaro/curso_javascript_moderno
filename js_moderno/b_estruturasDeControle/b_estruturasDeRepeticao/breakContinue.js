const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Como o BREAK age em um código
for (x in nums){
    if(x == 5){
        break;
    }
    console.log(`Índice ${x} = ${nums[x]}`);
}

console.log('');

// Como o CONTINUE age em um código
for(y in nums){
    if(y == 5){
        continue;
    }
    console.log(`Índice ${y} = ${nums[y]}`);
}

console.log('');

// Abaixo temo os RÓTULOS, estruturas defasadas
// Não usar este tipo de estrutura, é muito antigo, confuso e desatualizado
// Melhor quebrar em pequenas funções, pois facilita a leitura
externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo;
        console.log(`Par = ${a}, ${b}`);
    }
}
console.log('Fim');
