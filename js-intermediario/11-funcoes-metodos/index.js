// Como criar um método/ funcção dentro de um objeto
let usuario = {
    nome: "Luana",
    excluir: function () {
        console.log(`O/a usuário(a), ${this.nome} foi excluido.`);
    }
}

usuario.excluir()