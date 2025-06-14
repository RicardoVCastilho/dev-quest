//Estrutura padrão:
function somar (num1, num2) {
    return num1 + num2
}

let resultadoDaSoma = somar(12, 5)
console.log(resultadoDaSoma);

//Estrutura anônima (atribuindo uma função sem nome ao valor de uma variável):
let resultadoDaSub = function (num3, num4) {
    return num3 - num4
}

console.log(resultadoDaSub(12, 5));
