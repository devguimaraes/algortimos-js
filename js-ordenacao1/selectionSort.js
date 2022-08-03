const {infoLivros} = require("./listaLivros")

const maisBarato = infoLivros.reduce((acc, atual) => acc.valor < atual.valor ? acc : atual)

const arrayMaisBarato = infoLivros.map(el => el).sort((a, b)=> a.valor - b.valor)

const arrayMaisCaro = infoLivros.map(el => el).sort((a, b)=> b.valor - a.valor)

// Ordenacao por ordem alfabetica dos titulo do livro
const arrOrderAlfabetic = infoLivros.map(el => el).sort((a, b)=> a.nome > b.nome ? 1 : -1)


