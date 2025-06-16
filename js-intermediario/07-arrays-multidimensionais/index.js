// Arrays multidimensionais são aqueles que utilizamos dentro de outros Arrays
let filmes = [
    ["Mad-Max", 4.9, true],
    ["Furiosa", 4.5, false, ["Anya Taylor-Joy", 29]]
];

console.table(filmes[1]) // Exibe o furiosa em tabela
console.table(filmes [1] [1]) // Exibe só a nota do filme Furiosa (4.5)
console.table(filmes[1][3][1]) // Exibe só a idade da atriz principal (29)