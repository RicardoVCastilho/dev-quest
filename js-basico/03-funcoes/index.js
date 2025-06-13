/*Funcoes, estrutura:
    function nomeDaFuncao() {
        bloco de codigo
    }

    nomeDaFuncao()

Com parâmetros:

    function nomeDaFuncao(parametro1, parametro2) {
        bloco de codigo
    }

    nomeDaFuncao(parametro 1, parametro2)
*/

// Exemplo s/ parâmetro
function saudacaoAoUsuario() {
    alert("Hello World do JS!")
}

saudacaoAoUsuario()

// Exemplo c/ parâmetro
function soma(num1, num2) {
    return num1 + num2
}

let resultadoDaSoma = soma(5, 3);

console.log(resultadoDaSoma);
alert("Resultado da soma é: " + resultadoDaSoma);

// Exemplo c/parâmetro + padrão
function novaSaudacao (nomeDoUsuario = "Usuário") {
    alert (`Muito bem ${nomeDoUsuario} bem vindo ao estudo do JS!`)
}

novaSaudacao();

let num1 = -5;
let num2 = "-70";

console.log(num1 + num2);