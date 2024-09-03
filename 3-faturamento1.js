const faturamentoMensal = require('./faturamentoMensal.json');

function calcularFaturamento(faturamentoMensal) {
    // Filtra os dias com faturamento maior que 0
    const faturamentosValidos = faturamentoMensal.filter(dia => dia.valor > 0);

    // Encontra o menor e o maior valor de faturamento
    const menorFaturamento = Math.min(...faturamentosValidos.map(dia => dia.valor));
    const maiorFaturamento = Math.max(...faturamentosValidos.map(dia => dia.valor));

    // Calcula a média mensal, ignorando os dias com faturamento 0
    const somaFaturamento = faturamentosValidos.reduce((acum, dia) => acum + dia.valor, 0);
    const mediaFaturamento = somaFaturamento / faturamentosValidos.length;

    // Conta o número de dias com faturamento superior à média mensal
    const diasAcimaDaMedia = faturamentosValidos.filter(dia => dia.valor > mediaFaturamento).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoMensal);

console.log(`Menor faturamento: ${resultado.menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: ${resultado.maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
