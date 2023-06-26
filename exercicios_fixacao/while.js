// Exercício A

// 1) Mostrar os números pares existentes entre 1 e 20.

function num_pares() {
    let i = 1
    while (i <= 20) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++
    }
    
}
num_pares()
console.log('_________________________________________________')

// 2) Mostrar os números múltiplos de 5 existentes entre 1 e 20.

function multiplos5() {
    let i = 1
    while (i <= 20) {
        if (i % 5 == 0) {
            console.log(i)
        }
        i++
    }
    
}
multiplos5()
console.log('_________________________________________________')

// 3) Mostrar a soma dos números entre 1 e 20.

function somar() {
    let i = 1
    let soma = 0
    while (i <= 20) {
        soma += i
        console.log(soma)
        i++
    }
}
somar()
console.log('_________________________________________________')

// 4) Mostrar a soma dos números ímpares existentes entre 1 e 20.

function num_impares() {
    let i = 1
    let soma = 0
    while (i <= 20) {
        if (i % 2 !== 0) {
            soma += i
            console.log(soma)
        }
        i++
    }   
}
num_impares()
console.log('_________________________________________________')

// Exercício B
console.log('exercicio b')

// Utilizei o valor 25, para atribuir a variável i, porém o código foi executado somente 1 unica vez, porque o iterável não satisfaz a condição de parada.

function par() {
    let i = 25
    do {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++
    } while (i <= 20)
}
par()
console.log('_________________________________________________')

function multiplo_5() {
    let i = 25
    do {
        if (i % 5 == 0) {
            console.log(i)
        }
        i++
    } while (i <= 20)
}
multiplo_5()
console.log('_________________________________________________')

function soma3() {
    let i = 25
    let soma = 0
    do {
        soma += i
        console.log(soma)
        i++
    } while (i <= 20)
}
soma3()
console.log('_________________________________________________')

function impar() {
    let i = 25
    let soma = 0
    do {
        if (i % 2 !== 0) {
            soma += i
            console.log(soma)
        }
        i++
    } while (i <= 20)
}

impar()
console.log('_________________________________________________')


// Exercício C
console.log('Exercício C')

function numero_par(i) {
    i = 1
    while (i <= 20) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++
    }
}
numero_par()
console.log('_________________________________________________')

function mult_5(i) {
    i = 1
    while (i <= 20) {
        if (i % 5 == 0) {
            console.log(i)
        }
        i++
    }
    
}
mult_5()
console.log('_________________________________________________')

function soma2(i, soma) {
    i = 1
    soma = 0
    while (i <= 20) {
        soma += i
        console.log(soma)
        i++
    }
}
soma2()
console.log('_________________________________________________')

function impares(i, soma) {
    i = 1
    soma = 0
    while (i <= 20) {
        if (i % 2 !== 0) {
            soma += i
            console.log(soma)
        }
        i++
    }   
}
impares()
console.log('_________________________________________________')