var pais // declaracao
pais = "Brasil" // atribuicao

/*
Hoisting (em português: elevação) é um comportamento do JavaScript onde declarações de variáveis e funções são "movidas" para o topo do escopo onde foram definidas, antes da execução do código 
*/

var a; // hoisted (elevada ao topo)
console.log(a); // undefined
a = 5;          // atribuição ocorre aqui
console.log(a); // agora sim retornará o valor

/* 
Embora o let também seja hoisted, ele não é inicializado e fica em um estado chamado "Temporal Dead Zone" (zona morta temporal), entre o início do escopo e a linha onde ele é declarado. 
*/