//1.1 
function cumprimentar (nome) {
    return `Olá ${nome}!`
}

console.log(cumprimentar("Ricardo"));

//1.2
function dobro (num1) {
    return num1 * 2;
}

console.log(`O dobro do número digitado é: ${dobro(4)}`);

//1.3
function media (num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}

console.log(`A média dos 3 números é: ${media(5, 3, 5).toFixed(2)}`);

//1.4
function numeroPar (num1) {
    if (num1 % 2 === 0) {
        return `O número ${num1} é par.`
    } else {
        return `O número ${num1} é ímpar.`
    }
}

console.log(numeroPar(5));

//1.5
function areaRetangulo (base, altura) {
    return (base * altura) / 2;
}

console.log(`A área do seu retangulo é de: ${areaRetangulo(10, 5)}`);