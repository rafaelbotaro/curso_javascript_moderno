class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salário', 4500);
const contaDeLuz = new Lancamento('Luz', -220);
const celular = new Lancamento('Celular', -40);
const contaDeAgua = new Lancamento('Água', -80);
const gasolina = new Lancamento('Gasolina', -360);

const contas = new CicloFinanceiro(6, 2020);
contas.addLancamentos(salario, contaDeLuz, celular, contaDeAgua, gasolina);
console.log(contas.sumario());
