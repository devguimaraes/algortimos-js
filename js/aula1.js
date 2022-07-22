const { infoLivros } = require('./listaLivros');

// pegar todos os valores do objeto infoLivros
const precoLivros = infoLivros.map((el) => el.valor);

// pega o menor valor do objeto infoLivros
const menorValor = infoLivros.reduce((acc, atual) =>
	acc.valor < atual.valor ? acc : atual
);

// pegar o maior valor do objeto infoLivros
const maiorValor = infoLivros.reduce((acc, atual) =>
	acc.valor > atual.valor ? acc : atual
);

// Array com os valores ordenados do mais barato para o mais caro
const maisBaratos = infoLivros.map(el => el)
maisBaratos.sort((a, b)=> a.valor - b.valor)

// Array com os valores ordenados do mais caro para o mais barato
const maisCaros = infoLivros.map(el => el)
maisCaros.sort((a, b) => b.valor - a.valor  )

// Array com livros com valor ate 40 dinheiros
const livrosAte40 = infoLivros.filter(el => el.valor < 45 ? el : "")

// Array com livros de até 40 dinheiro ordenado em forma crescente
const menorValorAte40 = livrosAte40.map(el => el)
menorValorAte40.sort((a, b)=> a.valor - b.valor)



