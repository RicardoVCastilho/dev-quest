//2.1
let subtrair = function (num1, num2) {
    return num1 - num2;
}

console.log(`O resultado da subtração é: ${subtrair(5, 2)}`);

// 2.2
let mostrarMensagem = function (mensagem) {
    return mensagem;
}

console.log(mostrarMensagem("Eae, bem vindo!"));

//2.3
let calcularCubo = function (number) {
    return number ** 3;
}

let number = 5;

console.log(`O cubo do número ${number} é: ${calcularCubo(number)}`);

//2.4
let verificarMarioridade = function (idade) {
    if (idade >= 18) {
        return `Você tem ${idade} anos, então é maior de idade.`
    } else {
        return `Você tem ${idade} anos, então é menor de idade.`
    }
}

console.log(verificarMarioridade(13));

//2.5
let gerarNumeroAleatorio = function () {
    return Math.floor(Math.random() * 100) + 1;
}

console.log(`O número aleatório gerado é: ${gerarNumeroAleatorio()}`);

/*
Explicação sobre o objeto Math e seus principais métodos:

| Método (`Math`)       | Descrição                                                               | Exemplo             | Resultado    |
| --------------------- | ----------------------------------------------------------------------- | ------------------- | ------------ |
| `Math.random()`       | Gera um número pseudoaleatório entre `0` (inclusivo) e `1` (exclusivo). | `Math.random()`     | Ex: `0.7482` |
| `Math.floor(x)`       | Arredonda **para baixo** até o inteiro mais próximo.                    | `Math.floor(4.7)`   | `4`          |
| `Math.ceil(x)`        | Arredonda **para cima** até o inteiro mais próximo.                     | `Math.ceil(4.1)`    | `5`          |
| `Math.round(x)`       | Arredonda para o inteiro mais próximo (tradicional).                    | `Math.round(4.5)`   | `5`          |
| `Math.abs(x)`         | Retorna o valor absoluto (módulo).                                      | `Math.abs(-3)`      | `3`          |
| `Math.pow(x, y)`      | Eleva `x` à potência `y`.                                               | `Math.pow(2, 3)`    | `8`          |
| `Math.sqrt(x)`        | Raiz quadrada de `x`.                                                   | `Math.sqrt(16)`     | `4`          |
| `Math.max(a, b, ...)` | Retorna o maior valor da lista.                                         | `Math.max(3, 7, 2)` | `7`          |
| `Math.min(a, b, ...)` | Retorna o menor valor da lista.                                         | `Math.min(3, 7, 2)` | `2`          |
| `Math.trunc(x)`       | Remove a parte decimal, retornando só a parte inteira (sem arredondar). | `Math.trunc(4.9)`   | `4`          |
| `Math.sign(x)`        | Retorna o sinal de `x` (`-1`, `0`, `1`).                                | `Math.sign(-10)`    | `-1`         |
*/