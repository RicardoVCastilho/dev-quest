// Estrutura arrow function com 2 parâmetros
let resultadoDaSoma = (num1, num2) => {
    return num1 + num2
}

console.log(resultadoDaSoma(12, 5));

// Estrutura arrow funcion simplificada com 1 parâmetro
let incentivarQuester = nomeQuester => {
    console.log(`Parabéns ${nomeQuester}, você está no módulo de JS intermediário!`);
}

incentivarQuester("Ricardo");

// Estrutura da arrow function simplificada em uma linha
let resultadoDaSub = (num3, num4) => num3 - num4;
console.log(resultadoDaSub(12, 5));