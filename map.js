// 1)

let alunos = ['Esther','Mariana','Samuel','Rafael','David','Mathews','João Vitor','Isis'];
let notas = [8.5, 7.2, 6.8, 9.1, 5.4, 7.9, 6.5, 8.3];

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

alunosArray.forEach(elemento => {
    elemento["situacao"] = elemento["nota"] >= 7.0 ? "Aprovado" : "Reprovado"
})
console.log(alunosArray)

// 4) Crie um mapa (objeto Map) a partir do seu array de objetos

const mapa = new Map(alunosArray.map(obj => [obj.nome, [obj.nota, obj.situacao]]))
console.log(mapa)

// const mapa2 = {
//     "esther" : { nome: 'Esther', nota: 8.5, situacao: 'Aprovado' },
//     "mariana" : { nome: 'Mariana', nota: 7.2, situacao: 'Aprovado' },
//     "samuel" : { nome: 'Samuel', nota: 6.8, situacao: 'Reprovado' },
//     "rafael" : { nome: 'Rafael', nota: 9.1, situacao: 'Aprovado' },
//     "david" : { nome: 'David', nota: 5.4, situacao: 'Reprovado' },
//     "mathews" : { nome: 'Mathews', nota: 7.9, situacao: 'Aprovado' },
//     "Joao" : { nome: 'João Vitor', nota: 6.5, situacao: 'Reprovado' },
//     "isis" : { nome: 'Isis', nota: 8.3, situacao: 'Aprovado' }
// }
// console.log(mapa2)

//5) Utilize o método get( ) para obter a nota do 5º elemento do mapa


console.log(mapa.get("David")[0])


// 6) Utilize o método delete( ) para remover o 4º elemento do mapa.

mapa.delete("Rafael")
console.log(mapa)

// 7) Utilize o método has( ) para verificar se existe algum aluno chamado "Jon Snow" neste mapa.

console.log(mapa.has("Jon Snow"))

// 8) Mostre todas as chaves do mapa utilizando o método keys( )

console.log(mapa.keys())

// 9) Mostre todos os valores do mapa utilizando o método values( )

console.log(mapa.values())

// 10) Mostre as chaves e seus respectivos valores utilizando o método entries( )

console.log(mapa.entries())