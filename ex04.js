function exibirDetalhesProduto(produto){
    return `Produto: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)},Estoque: ${produto.estoque} unidades.`;
}

const produto = {
    nome: "Teclado",
    preco: 50,
    estoque: 20,
}

console.log(exibirDetalhesProduto(produto))


//foreach
const numeros  = [1,2,3,4,5];

numeros.forEach(num => {
    console.log(`Numero: ${num}`)
});

const dobrados = numeros.map(num => num*2);
console.log(dobrados);