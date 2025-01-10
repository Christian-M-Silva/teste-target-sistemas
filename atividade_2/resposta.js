function verificaFibonacci(numero) {
    let fib1 = 0, fib2 = 1, proxFib = 0;

    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    
    while (proxFib < numero) {
        proxFib = fib1 + fib2; 
        fib1 = fib2;          
        fib2 = proxFib;       
    }

    if (proxFib === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}


const numero = 40 //Altere o número
const resultado = verificaFibonacci(numero);
console.log(resultado);
