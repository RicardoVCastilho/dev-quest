// Escopo global
const mensagem = "Olá";

// Escopo de bloco
if(true) {
    const mensagem2 = "Olá 2"

    console.log(mensagem2);
}

console.log(mensagem);

/* 
Use let (ou const) sempre que possível.
var é antigo e tem comportamento que pode causar bugs difíceis de encontrar.

var = escopo de função
let = escopo de bloco

ambas podem ser redeclaradas

const = escopo de função
não pode ser redeclarada
*/