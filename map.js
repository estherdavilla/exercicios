// 1)

let alunos = ['Esther','Mariana','Samuel','Rafael','David','Mathews','João Vitor','Isis','Lucas','Ramon','Suellen','Gabriel','Ilton','Bruno','Ricardo'];
let notas = [8.5, 7.2, 6.8, 9.1, 5.4, 7.9, 6.5, 8.3, 4.7, 9.8, 6.2, 7.6, 9.0, 5.3, 8.7];

const alunosArray = []

for (i = 0; i < alunos.length; i++) {
    let objeto = {
        "nome": alunos[i],
        "nota": notas[i]
    }
    alunosArray.push(objeto)
}
console.log(alunosArray)

// 2)

alunosArray.forEach((elemento) => console.log(elemento["nome"]))

// 3)

// let situacao = notas.map(nota => nota >= 7.0 ? "Aprovado" : "Reprovado")


// for (i = 0; i < alunos.length; i++) {
//     objeto[i].situacao = (notas[i] >= 7.0 ? "Aprovado" : "Reprovado")
// }

alunosArray.forEach(elemento => {
    elemento["situação"] = elemento["nota"] >= 7.0 ? "Aprovado" : "Reprovado"
})

// Para o array "alunosArray" faça (=>), adicione o elemento situação (elemento["situação"])

//Cria um mapa vazio
let mapa = new Mapa()