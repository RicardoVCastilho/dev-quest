/* loop com for, estrutura: 
for (inicializador; condição; incremento) {
    declaracao;
}
*/
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/* Loop com While, estrutura:
while (condicao) {
    bloco de execucao
}
*/
let a = 10;
let b = 15;

while (a < b) {
    console.log('Incrementando a variável a: ' + a);
    a++
}

/* Loop com do-while, estrutura:
do {
    bloco de código
} while (condicao)
*/

var num = 1;

do {
    console.log('Entrou ' + num);
    num++
} while (num <= 5);

