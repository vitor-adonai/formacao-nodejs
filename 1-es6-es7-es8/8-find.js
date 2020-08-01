var vitor = {
    nome: "Vitor Adonai",
    empresa: "Vitor.Dev",
    salario: 200
}
var marcela = {
    nome: "Marcela",
    empresa: "Claro",
    salario: 2002
}

var erick = {
    nome: "Vitor Adonai",
    empresa: "NET",
    salario: 100
}

var user = [vitor, erick, marcela];

// VAI RETORNAR APENAS O PRIMEIRO RESULTADO COMPATIVEL COM A BUSCA
console.log("Primeiro usuário com o nome Vitor Adonai: ", user.find(u => u.nome === "Vitor Adonai"), "\n")

console.log("Salário maior que 2000: ", user.find(u => u.salario >= 2000), "\n")