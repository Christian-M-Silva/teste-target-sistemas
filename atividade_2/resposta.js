function verificaFibonacci(number) {
    let fib1 = 0, fib2 = 1, proxFib = 0;

    if (number === 0 || number === 1) {
        return `O número ${number} pertence à sequência de Fibonacci.`;
    }

    
    while (proxFib < number) {
        proxFib = fib1 + fib2; 
        fib1 = fib2;          
        fib2 = proxFib;       
    }

    if (proxFib === number) {
        return `O número ${number} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${number} não pertence à sequência de Fibonacci.`;
    }
}


const number = 40 //Altere o número
const resultado = verificaFibonacci(number);
console.log(resultado);
