//4.1 e 4.2
function executarMensagem(mensagem) {
    return function (nome) {
        return `${mensagem} ${nome}`;
    }
}

let gerarMensagem = executarMensagem("Seja bem vindo,");
console.log(`${gerarMensagem("Ricardo!")}`);

//4.3
function multiplicar(multiplicador) {
    return function (numero) {
        return numero * multiplicador;
    }
}

const dobrar = multiplicar(2);
let valor = 4;

console.log(`O dobro de ${valor} é: ${dobrar(valor)}`);

//4.4
function calculadora(num1, num2, operacao) {
    return operacao(num1, num2);
}

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

console.log(calculadora(10, 5, soma));          // 15
console.log(calculadora(10, 5, subtracao));     // 5
console.log(calculadora(10, 5, multiplicacao)); // 50
console.log(calculadora(10, 5, divisao));       // 2

//4.5
function filtrarValores (array, filtro) {

    let resultado = [];

    for (let elemento of array) {
        if(filtro(elemento)) {
            resultado.push(elemento);
        }
    }
    
    return resultado;
}

function somentePares (numero) {
    return numero % 2 === 0;
}

function maioresQueDez(numero) {
    return numero > 10;
}

function divisiveisPorTres(numero) {
    return numero % 3 === 0;
}

const numeros = [2, 5, 8, 12, 15, 18, 21, 3];

console.log(filtrarValores(numeros, somentePares));
console.log(filtrarValores(numeros, maioresQueDez));
console.log(filtrarValores(numeros, divisiveisPorTres));


