// 'use strict' // não permite que o contexto de função do this escape para o escopo global
// O this normalmente está associado a algum contexto e algum escopo
console.log(this);
// No exemplo acima, conseguimos observar o this no escopo global, retornando o objeto window que possui diversos métodos pré-prontos para serem utilizados no navegador, por exemplo 
console.log(this === window);

this.name = "Ricardo";

function saudar () {
    console.log("This no contexto da função", this);
    console.log(`Olá, ${this.name}`);
}

saudar()

let usuario = {
    nome: "Ricardo",
    saudacao: function () {
        console.log('this no contexto do método' + this);

        console.log(`this.nome no contexto do método, ${this.nome}`);
    }
}

usuario.saudacao()

let comida = {
    nome: "Brocolis",
    temperatura: 0,
    cozinhar: function (temperaturaDeCozimento) {
        console.log(`this no contexto do objeto comida, ${this}`);
        this.temperatura = temperaturaDeCozimento;
    }
}

console.log(comida);

comida.cozinhar(100);
console.log(comida);


