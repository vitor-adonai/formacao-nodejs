var nome = "Vitor";
var idade = 31;

var empresa = {
    nome: "Vitor.Dev",
    cidade: "Campinas",
    email: "contato@vitor.dev.br"
}

var usuario = {
    nome,
    idade,
    ...empresa // Copiei o objeto empresa dentro de usuario
}

console.log(usuario)