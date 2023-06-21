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

alunos.splice (5,0);

console.log(alunos);
console.log(alunos.length);

// 8)

alunos.sort();

// 9)

for (let[index, aluno] of alunos.entries()) {
    console.log(index + " - " + aluno)

}

alunos.forEach(aluno => console.log(aluno));

console.log('\n')

// 9)

for (let[index, aluno] of alunos.entries()) {
    console.log(index + " - " + aluno)

}
// 10)

notas = []

// 11)

for (i = 0; i < alunos.length; i++) {
    notas[i] = (Math.random() * 10).toFixed(1);
    console.log(notas[i])
}

// 12)

for (i = 0; i < alunos.length; i++) {
    if (notas[i] <= 9) {
        nota_final = notas.map(x => parseFloat(x) + 1)
        console.log(nota_final[i])
    }
    else {
        console.log((nota_final[i] = 10).toFixed(1))
    }
}

// 13)

console.log(nota_final.filter(nota => nota > 7.0))

// 14)

for (let i = 0; i < alunos.length; i++) {
console.log("Aluno: " + alunos[i] + " - " + "Nota: " +  nota_final[i])
}

// 15)

notas.forEach((nota, i) => {
if (nota >= 7) {
    console.log(nota_final[i] + " - Aprovado")
} 
else {
    console.log(nota_final[i] + " - Reprovado")
}
})

// 16)

// let posicao = alunos.indexOf('Lucas');
console.log('O index do elemento Lucas é o ' + alunos.indexOf('Lucas'))

// 17)

console.log("O Índex da primeira nota maior que 9.0 é " + nota_final.findIndex(nota => nota > 9.0))

// 18)

console.log(alunos.includes('Lucas'))

// 19)

let media = nota_final.reduce((media, nota) => )