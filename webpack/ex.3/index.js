const produto = {
    name: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProtudo = clone(produto)

novoProtudo.name = 'Caneta Bic Azul'

console.log(produto, novoProtudo)