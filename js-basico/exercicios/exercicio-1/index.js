let nomeDoUsuario = prompt("Digite seu nome:");

if (nomeDoUsuario === null || nomeDoUsuario.trim() === "") {
    alert("Nenhum nome de usuário foi digitado!")
} else {
    alert(`Seja bem vindo/a ${nomeDoUsuario}!`);
    console.log(`Seja bem vindo/a ${nomeDoUsuario}!`);
}
