// método .slice (retorna uma cópia do array, com o parâmetro de intervalo do index baseado nos elementos do array)
let verduras = ["Cebola", "Cenoura", "Brócolis", "Batata"];

let verdurasExtraidas = verduras.slice(1,3);

console.log(verdurasExtraidas);

// método .splice (remove os elementos definidos pelo index direto do Array)
let verdurasExtracted = verduras.splice(1,2);

console.log(verdurasExtracted);
console.log(verduras);

// o método .splice, além de remover, pode adicionar novos elementos dentro do array através dos parâmetros estabelecidos através do index
let removeEAdicionaVerduras = verduras.splice(1, 2, "Batata Doce", "Jerimum");

console.log(verduras);