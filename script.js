function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    while (b < numero) {
        let valorTemporario = b;
        b =  a + b;
        a = valorTemporario;
    }
    
    if (b === numero) {
        return true;
    } else {
        return false;
    }
}


function main() {
    let numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "));
    if (verificaFibonacci(numero)) {
        console.log(numero + " pertence à sequência de Fibonacci.");
    } else {
        console.log(numero + " não pertence à sequência de Fibonacci.");
    }
}

main();