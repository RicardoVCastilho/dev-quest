const passarANoite = confirm("Welcome Stranger. Deseja pagar 50 contos para passar a noite na SuperPousada?");

console.log(passarANoite);

if (passarANoite) {
    alert("Ótimo! Nossos serviços são dos melhores.");
    console.log("Vai passar a noite na SuperPousada");
} else {
    alert("Que pena! Achei que tu fosse mais massa.");
    console.log("Não vai passar a noite na SuperPousada");
}