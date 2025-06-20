//3.1
let dobro = num1 => num1 * 2;

let number = 5;

console.log(`O dobro de ${number} é: ${dobro(number)}`);

//3.2
let saudar = (nome, mensagem) => {
    console.log(`Olá, ${nome} ${mensagem}`);
}

saudar("Ricardo", "seja bem vindo!");

//3.3
let calcularImc = (peso, altura) => peso / (altura ** 2);

let peso = 120;
let altura = 1.80;

console.log(`O IMC de uma pessoa que tem ${peso} kg e ${altura}m de altura é de: ${calcularImc(peso, altura).toFixed(2)}`);

function classificacaoImc(imc) {
    if (imc < 18.5) {
        return `Você está abaixo do peso ideal.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        return `Você está com o peso ideal`;
    } else if (imc >= 25 && imc <= 29.9) {
        return `Você está com sobrepeso.`;
    } else {
        return `Você está obeso.`;
    }
}

console.log(classificacaoImc(calcularImc(peso, altura)));

//3.4
let parOuImpar = num1 => {
    if (num1 % 2 === 0) {
        return `um número par.`
    } else {
        return `um número ímpar.`
    }
}

let valor = 18;

console.log(`O número ${valor} é: ${parOuImpar(valor)}`);

//3.5
let celsiusParaFahrenheit = tempEmCelsius => (tempEmCelsius * 9/5) + 32;

let temperatura = 35;

console.log(`${temperatura} Graus Celsius é o mesmo que: ${celsiusParaFahrenheit(temperatura)} Graus Fahrenheit.`);
