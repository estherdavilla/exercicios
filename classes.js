class Livro {
    constructor(isbn, titulo, genero, ano) {
        this.isbn = isbn
        this.titulo = titulo
        this.genero = genero
        this.ano = ano
    }
}
//Criar uma instancia, ou seja, criar um objeto.

let livro1 = new Livro("2023BR12", "Dom Casmurro", "Romance", 1899)
let livro2 = new Livro("2023BR13", "O Cortiço", "Romance", 1900)
let livro3 = new Livro("2023BR14", "Iracema", "Romance")

console.log(livro1)
console.log(livro2)
console.log(livro3)

let livros = []
livros.push(livro1, livro2, livro3)

console.log(livros)

console.log("____________________________________________________________________")

// Exercício 1
// Crie as seguintes classes com seus respectivos atributos:


class Cliente {
    constructor(cpf, nome, datanascimento){
        this.cpf = cpf
        this.nome = nome
        this.datanascimento = datanascimento
    }
}
class Produto {
    constructor(codigo_produto, descricao, qtde_estoque){
        this.codigo_produto = codigo_produto
        this.descricao = descricao
        this.qtde_estoque = qtde_estoque
    }
}
class Venda {
    constructor(codigo_venda, datahora, cliente, produto){
        this.codigo_venda = codigo_venda
        this.datahora = datahora
        this.cliente = cliente
        this.produto = produto
    }
}

// Exercício 2
// Instancie a seguinte quantidade de objetos para cada classe, sabendo que os atributos "cliente" e "produto" da Venda fazem referência a clientes e produtos que já existem:

let cliente1 = new Cliente("85121621501","Niklaus Mikaelson","26/08/1036")
let cliente2 = new Cliente("05482140281","Elijan Mikaelson","16/07/1033")
let cliente3 = new Cliente("06082144652","Rebekah Mikaelson","07/03/1039")

let produto1 = new Produto("015246","Agulha hipodérmica 25x8",500)
let produto2 = new Produto("054260","Seringa hipodérmica 5mL",400)
let produto3 = new Produto("036245","Tubo com gel 3,5mL",1000)
let produto4 = new Produto("084623","Tubo EDTA K2 4mL",1000)
let produto5 = new Produto("096432","Luva de Procedimento P",500)
let produto6 = new Produto("021563","Touca sanfonada",300)
let produto7 = new Produto("041025","Scalp á vácuo 23G",50)
let produto8 = new Produto("074521","Tubo citrato de sódio 4mL",300)

let venda1 = new Venda ("45413","05/06/2023 14:00",cliente1,produto1)
let venda2 = new Venda ("01632","08/06/2023 10:30",cliente1,produto2)
let venda3 = new Venda ("84621","14/06/2023 09:40",cliente2,produto3)
let venda4 = new Venda ("70135","17/06/2023 15:10",cliente3,produto4)
let venda5 = new Venda ("46200","20/06/2023 13:07",cliente3,produto5)

// Exercício 3
// Crie 3 arrays, cada um para guardar os objetos de determinada classe. Em seguida, percorra cada um dos arrays exibindo os seguintes atributos:


let clientesArray = []
clientesArray.push(cliente1, cliente2, cliente3 )
console.log(clientesArray)

let produtosArray = []
produtosArray.push(produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8)
console.log(produtosArray)

let vendasArray = []
vendasArray.push(venda1, venda2, venda3, venda4, venda5)
console.log(vendasArray)

console.log("____________________________________________________________________")

// Exercício 4
// Utilize o método .map( ) para transformar cada array que você criou num objeto da classe Map( ), de modo que as respectivas chaves e valores sejam os que se seguem:

const mapa_array1 = new Map(clientesArray.map(obj => [obj.cpf, [obj.nome, obj.datanascimento]]))
console.log(mapa_array1)

const mapa_array2 = new Map(produtosArray.map(obj => [obj.codigo_produto, [obj.descricao, obj.qtde_estoque]]))
console.log(mapa_array2)

const mapa_array3 = new Map(vendasArray.map(obj => [obj.codigo_venda, [obj.datahora, obj.cliente, obj.produto]]))
console.log(mapa_array3)

console.log("____________________________________________________________________")

// Exercício 5
// Faça a mesma coisa que o exercício anterior, porém agora os valores devem ser exibidos em formato de objeto ao invés de array.

const objetoMap1 = new Map(clientesArray.map(obj => [obj.cpf, { nome: obj.nome, datanascimento: obj.datanascimento }]))
console.log(objetoMap1)

const objetoMap2 = new Map(produtosArray.map(obj => [obj.codigo_produto, { descricao: obj.descricao, qtde_estoque: obj.qtde_estoque }]))
console.log(objetoMap2)

const objetoMap3 = new Map(vendasArray.map(obj => [obj.codigo_venda, { datahora: obj.datahora, cliente: obj.cliente, produto: obj.produto }]))
console.log(objetoMap3)

console.log("____________________________________________________________________")