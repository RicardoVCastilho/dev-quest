// If
let nomeFilme = "Batman";

if(nomeFilme ===  "Vingadores") {
    console.log("Filme dos Vingadores");
}

console.log("Não é Vingadores");

// If - Else
let novoFilme = "Batman vs Superman";

if(novoFilme === "Superman") {
    console.log("Filme do Superman");
} else {
    console.log("Outro filme");
}

// Else - If
let filme = "Avatar de James Cameron";

if (filme === "Avatar de James Cameron") {
    console.log(`O filme: ${filme} é a maior bilheteria da história do cinema.`);
} else if(filme === "Vingadores Ultimato") {
    console.log(`Esta é a segunda maior bilheteria da história e o filme é: ${filme}`)
} else if (filme === "Avatar 2: O caminho da água") {
    console.log(`Esta é a terceira maior bilhederia da história e o filme é: ${filme}`);
} else {
    console.log("Este filme não faz parte do top 3 bilheterias da história");
}

// Operador ternário
false ? console.log("A condição é verdadeira") : console.log("A condição é falsa");

filme === "Avatar de James Cameron" ? console.log("Maior bilheteria") : console.log("Não é a maior bilheteria");

// Switch - Case
let movie = "Ultimato";

switch(movie) {
    case "Avatar":
        console.log("Maior bilheteria da história: " + movie);
        break;
    case "Ultimato":
        console.log("Segunda maior bilheteria da história: " + movie);
        break;
    case "Avatar 2":
        console.log("Terceira maior bilheteria da história: " + movie);
        break;
    case "Titanic":
        console.log("Quarta maior bilheteria da história: " + movie);
        break;
    case "Despertar da Força":
        console.log("Quinta maior bilheteria da história: " + movie);
        break;
    default:
        console.log(`${movie} não faz parte do top 5 maiores bilheterias da história.`);
}

// Switch - Case = Multicasos
let avaliacao = 4

switch (avaliacao) {
    case 1:
    case 2:
        console.log("Filme Ruim")
        break;

    case 3:
    case 4:
        console.log("Filme Bom")
        break;

    case 5: 
        console.log("Filme Excelente");
        break;
    
    default:
        console.log("Nota Inválida");
}
