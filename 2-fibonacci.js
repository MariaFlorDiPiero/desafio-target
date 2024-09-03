let chamadasFibonacci = 0;

function fibonacciComContador(n) {
    chamadasFibonacci++;
    if (n <= 1) {
        return n;
    } else {
        return fibonacciComContador(n - 1) + fibonacciComContador(n - 2);
    }
}

function verificaFibonacci(numero) {
    let i = 0;
    let valorFibonacci;

    while (true) {
        valorFibonacci = fibonacciComContador(i);
        if (valorFibonacci === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        } else if (valorFibonacci > numero) {
            return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
        }
        i++;
    }
}


const numeroInformado = 21;
const resultado = verificaFibonacci(numeroInformado);
console.log(resultado);
