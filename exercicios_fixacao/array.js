// 1) 

let alunos = ['Esther','Mariana','Samuel','Rafael','David','Mathews','João Vitor','Isis','Lucas','Ramon','Suellen','Gabriel','Ilton','Bruno','Ricardo'];

// 2)

alunos.push('Daniela','Antônio','André');


// 3)

alunos.splice(2,0,"Maria");
alunos.splice(6,0,"Adriana");
alunos.splice(7,0,"Renato");

// 4)

alunos.sort().reverse();

// 5)

alunos.pop();

// 6)

alunos.shift();

// 7)

alunos.splice (5,1);

// 8)

alunos.sort();

// 9)

for (let[index, aluno] of alunos.entries()) {
    console.log(index + " - " + aluno)
}
console.log("_________________________________________________________")

// alunos.forEach(aluno => console.log(aluno));
// console.log('\n')

// 10)

notas = []

// 11)

for (i = 0; i < alunos.length; i++) {
    notas[i] = parseFloat(9.0)
}
console.log("_________________________________________________________")

// 12)

nota_final = notas.map(nota => nota > 9.0 ? parseFloat(10.0) : parseFloat(nota) + 1.0);
console.log(notas);
console.log("_________________________________________________________")

// 13)

console.log(nota_final.filter(nota => nota > 7.0));
console.log("_________________________________________________________") 

// 14)

for (let i = 0; i < alunos.length; i++) {
console.log("Aluno: " + alunos[i] + " - " + "Nota: " +  nota_final[i])
}
console.log("_________________________________________________________")

// 15)

notas.forEach((nota, i) => {nota >= 7 ? console.log(nota_final[i] + " - Aprovado") : console.log(nota_final[i] + " - Reprovado")})
console.log("_________________________________________________________")

// 16)

console.log('O index do elemento Lucas: ' + alunos.indexOf('Lucas'))
console.log("_________________________________________________________")

// 17)

console.log("O Índex da primeira nota maior que 9.0: " + nota_final.findIndex(nota => nota > 9.0))
console.log("_________________________________________________________")

// 18)

console.log(alunos.includes('Lucas'))
console.log("_________________________________________________________")

// 19) 

let soma = nota_final.reduce((media, nota) => media += nota)
let mediaTurma = soma / nota_final.length
console.log(mediaTurma)
console.log("_________________________________________________________")

// 20) 

console.log(nota_final.every(nota => nota >= mediaTurma))
console.log("_________________________________________________________")

// 21) 

console.log(nota_final.some(nota => nota > mediaTurma))
console.log("_________________________________________________________")