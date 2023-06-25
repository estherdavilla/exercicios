function exibir_tabuada() {
    const numero = parseInt(document.getElementById("input_tabuada").value);
    const resultadoDiv = document.getElementById("resultado1");
    resultadoDiv.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const linha = document.createElement("div");
        linha.textContent = numero + " x " + i + " = " + resultado;
        resultadoDiv.appendChild(linha);
    }
}

function exibir_num_par() {
    const numero = parseInt(document.getElementById("input_numpares").value);
    let i = 1;
    let pares = "";
    
    while (i <= numero) {
        if (i % 2 === 0) {
        pares += i + " , ";
        }
        i++;
    }
    
    document.getElementById('resultado2').innerHTML = pares;
}

function soma_numeros() {
    let numero = parseInt(document.getElementById("input_somar").value);
    let soma = 0
    let i = 0

    while (numero !== -1) {
        soma += numero;
        numero = parseInt(prompt("Digite um número inteiro (-1 para parar): "));
        i++
    }
    document.getElementById("resultado3").innerHTML = "A soma dos números é: " + soma;
}
