const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentual(faturamentoPorEstado) {
    const valorTotal = Object.values(faturamentoPorEstado).reduce((acum, valor) => acum + valor, 0);

    const percentuais = {};
    for (const estado in faturamentoPorEstado) {
        percentuais[estado] = (faturamentoPorEstado[estado] / valorTotal) * 100;
    }

    return percentuais;
}

const percentuais = calcularPercentual(faturamentoPorEstado);

for (const estado in percentuais) {
    console.log(`Estado: ${estado}, Percentual: ${percentuais[estado].toFixed(2)}%`);
}
