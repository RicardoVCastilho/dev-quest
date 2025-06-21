// Objeto são variáveis compostas que armazenam vários valores ao mesmo tempo, tem forma de "propriedades".
let tenis = { 
    cor: "Branco",
    tamanho: 42,
    emEstoque: true
}

console.log(tenis);
// Para acessar as propriedades dentro de um objeto, utilizamos a notação de ponto
console.log(tenis.cor);
//Também consigo adicionar novas propriedades no meu objeto, através da notação de ponto
tenis.valor = 200;
console.log(tenis);