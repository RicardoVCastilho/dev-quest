// Higher order functions recebem outras funções como parâmetro ou enviam outras funções como resultado

// Exemplo com uma funcção para calcular o ano de nascimento de um usuário
const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
    const mesAtual = 6;
    let anoDeNascimento = 2025 - idade;
    if (mesDeNascimento > mesAtual) anoDeNascimento --;

    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log(`Seu ano de nascimento é: ${anoDeNascimento}`);
}

calcularAnoDeNascimento(22, 8, imprimirAnoDeNascimento)

// Outro exemplo, observe a função de dobrar um número abaixo
function dobrar(num) {
    return num * 2
}

console.log(dobrar(2)); //  4

// Observe agora uma função multiplicar que tem um multiplicador como parâmetro e recebe uma função de multiplicação com um número como parâmetro
function multiplicar (multiplicador) {
    return function (num) {
        return num * multiplicador
    }
}

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(dobrar(3));
console.log(triplicar(3));
console.log(quadruplicar(3));

