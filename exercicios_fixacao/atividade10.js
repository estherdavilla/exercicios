// Exercício 1

class Forma {
    altura
    constructor(altura) {
        this.altura = altura
    }
    calcularArea() {
        console.log("Área da classe mãe...")
    }
    calcularVolume() {
        console.log("Volume da classe mãe...")
    }
}

// Exercício 2

class FormaPlana extends Forma{
    #tipo
    #base
    #comprimento
    constructor (altura, tipo, base, comprimento){
        super(altura)
        this.#tipo = tipo.toLowerCase()
        this.#base = base
        this.#comprimento = comprimento
    } 
    getTipo() {
        return this.#tipo
    }
    setTipo(novoTipo) {
        this.#tipo = novoTipo
    }
    getBase() {
        return this.#base
    }
    setBase(novaBase) {
        this.#base = novaBase
    }
    getComprimento() {
        return this.#comprimento
    }
    setComprimento(novoComprimento) {
        this.#comprimento = novoComprimento
    }
    // Exercício 3
    calcularArea(){
        if (this.#tipo == 'retangular') {
            let areaRetangulo = this.#base * this.#comprimento
            return areaRetangulo.toFixed(2)
        }
        if (this.#tipo == "triangular") {
            let areaTriangulo = (this.#base * this.#comprimento) / 2
            return areaTriangulo.toFixed(2)
        }
        if (this.#tipo !== "retangular" && this.#tipo !== "triangular" ) {
            console.log("Forma não encontrada!!")
            return -1
        }
    }
    calcularVolume(){
        if (this.#tipo == 'retangular') {
            let areabase = this.calcularArea()
            let volume = areabase * this.altura
            return volume.toFixed(2)
        }
        if (this.#tipo == 'triangular') {
            let areabase = this.calcularArea()
            let volume = (areabase * this.altura)/3
            return volume.toFixed(2)
        }
        if (this.#tipo !== "retangular" && this.#tipo !== "triangular" ) {
            console.log("Forma não encontrada!!")
            return -1
        }
    }
}

class FormaCircular extends Forma {
    #pi = 3.14
    static pin = 3.14
    #raio
    constructor(altura, raio){
        super(altura)
        this.#raio = raio
    }
    getPin(){
        return FormaCircular.pin
    }
    getRaio() {
        return this.#raio
    }
    setRaio(novoRaio) {
        this.#raio = novoRaio
    }
    // Exercício 5
    calcularArea(){
        let area =  this.#pi * (this.#raio ** 2)
        return area.toFixed(2)
    }
    calcularVolumeCilindro(){
        let areabase = this.calcularArea()
        let volume = areabase * this.altura
        return volume.toFixed(2)
    }
    calcularVolumeCone(){
        let areabase = this.calcularArea()
        let volume = (areabase * this.altura)/3
        return volume.toFixed(2)
    }
    calcularVolumEsfera(){
        let areabase = this.calcularArea()
        let volume = areabase * this.#raio * 1.33
        return volume.toFixed(2)
    }
}

//Objetos:
let retangulo = new FormaPlana(6,"retangular",5,12)
let triangulo = new FormaPlana(6,"triangular", 12,8)
let circulo = new FormaCircular(5,10)

//Resultados
console.log("Resultado Área base Retângulo: " + retangulo.calcularArea())
console.log("Resultado Área base Triângulo: " + triangulo.calcularArea())

console.log("Resultado Volume do Retângulo: " + retangulo.calcularVolume())
console.log("Resultado Volume do Triângulo: " + triangulo.calcularVolume())

console.log("Resultado Área base do Circulo: " + circulo.calcularArea())
console.log("Resultado Volume Cilindro: " + circulo.calcularVolumeCilindro())
console.log("Resultado Volume Cone: " + circulo.calcularVolumeCone())
console.log("Resultado Volume Esfera: " + circulo.calcularVolumEsfera())

// b)  Explique a razão pela qual a invocação do método "calcularVolume" por uma instância da classe "FormaCircular" produz a saída padrão da classe mãe.

console.log(circulo.calcularVolume())
//Por causa do polimorfismo, que utiliza os mesmo métodos de uma classe mãe, porém de forma diferente. No método 'calcularVolume' não existe saída para a classe filha 'FormaCircular', por quê o método não é aplicado a classe filha. Neste caso, á saída da função é a mesma aplicada a classe mãe.


// Exercício 8 (BÔNUS)
// Transforme o atributo #pi da classe FormaRedonda em um atributo estático e faça as modificações necessárias no código.

console.log(FormaCircular.getPin())