//1.1
let categorias=['Eletronicos','Vestuario','Alimentos']
console.log(categorias)

//1.2
let codigoProdutos=['101','102','103','104']
let fornecedores= new Array('TechSupply', 'ModaExpress', 'SuperFoods')
console.log(codigoProdutos)
console.log(fornecedores)

//1.3
console.log(categorias[0])
categorias[1]='Calçados'
console.log(categorias)

//2.1

categorias.pop()
categorias.shift()
categorias.push('Livros')
categorias.unshift('Brinquedos')

//2.2
console.log(categorias.length)

//2.3
let procura = categorias.indexOf('Calçados')
console.log(procura)
console.log(categorias.includes('Eletronicos'))

//3.1
for(let i = 0; i < categorias.length; i++){
    console.log(categorias[i])
}

//3.2
for(let categoria of categorias){
    console.log(categoria)
}

//4
const produtos = [
{ nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
{ nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
{ nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

//4.1
console.log(produtos[0].nome)

//4.2
let produtoBaratos = produtos.filter(produtos => produtos.preco < 300)
console.log(produtoBaratos)

let preços=[50, 150, 200, 350, 400]
let mult100 = preços.filter(preços => preços % 100 == 0)
console.log(mult100)

//4.3
let numeros=[2, 3, 5, 10]
let soma = numeros.reduce((total,numero) => total + numero, 0)
console.log(soma)

let valEstoque = produtos.reduce((total,produtos) => total + (produtos.preco * produtos.estoque), 0)
console.log(valEstoque)

//4.4
let precosOriginais = [100, 200, 300]
let desconto = precosOriginais.map(preco => preco * 0.9)
console.log(desconto)

let nomesProdutos = produtos.map(produto => produto.nome)
console.log(nomesProdutos)

//4.5
let produtosOrdenados = produtos.slice()
produtosOrdenados.sort((a, b) => a.preco - b.preco)
console.log(produtosOrdenados)

//4.6

let estoqueBaixo = produtos.some(produto => produto.estoque < 5);
console.log(estoqueBaixo);

let inventario = [
    { nome: 'Teclado', estoque: 15 },
    { nome: 'Mouse', estoque: 2 },
    { nome: 'Headset', estoque: 10 }
];

let estoqueCritico = inventario.some(produto => produto.estoque < 5);
console.log(estoqueCritico);

let produtoCritico = inventario.find(produto => produto.estoque < 5);
console.log(produtoCritico);