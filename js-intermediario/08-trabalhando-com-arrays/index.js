let frutas = ["Banana", "Maçã", "Laranja", "Pêra"];
let frutasTamanho = frutas.length;
// Utilizando o primeiro método de iteração de Arrays ^^ .length (retorna o tamanho de um array)

console.log(frutasTamanho);

// iterando com for
for (let i = 0; i < frutasTamanho; i++) {
    console.log(`Fruta: ${frutas[i]}`);
} // Fruta: Banana | Fruta: Maçã | Fruta: Laranja | Fruta: Pêra

// iterando no array com forEach e uma funcção anônima
frutas.forEach(function (item) {
    console.log(`Fruta: ${item}`);
})

// método .push (adiciona elementos no final do array)
frutas.push("Manga");
console.log(frutas);

// método .pop (remove o último elemento do array)
frutas.pop();
console.log(frutas);

// método .shift(remove o primeiro elemento do array)
frutas.shift()
console.log(frutas);

// método .unshift (adiciona um elemento no início do Array)
frutas.unshift("Morango");
console.log(frutas);

// método .indexOf (revela a posição de um dos elementos do array)
console.log(frutas.indexOf("Maçã"));