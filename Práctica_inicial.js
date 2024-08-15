function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}


function generarFibonacci(limite) {
    let fib = [0, 1];
    while (true) {
        let siguiente = fib[fib.length - 1] + fib[fib.length - 2];
        if (siguiente > limite) break;
        fib.push(siguiente);
    }
    return fib;
}


function procesarNumeros() {
    let pares = [];
    let impares = [];
    let fibonacci = generarFibonacci(100);
    let paresEnFibonacci = [];
    let imparesPrimos = [];

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            if (fibonacci.includes(i)) {
                paresEnFibonacci.push(i);
            }
        } else {
            impares.push(i);
            if (esPrimo(i)) {
                imparesPrimos.push(i);
            }
        }
    }

    return {
        pares,
        paresEnFibonacci,
        impares,
        imparesPrimos
    };
}

// Ejemplo de uso
let resultados = procesarNumeros();

console.log('Números Pares:', resultados.pares);
console.log('Números Pares en la serie de Fibonacci:', resultados.paresEnFibonacci);
console.log('Números Impares:', resultados.impares);
console.log('Números Impares Primos:', resultados.imparesPrimos);
