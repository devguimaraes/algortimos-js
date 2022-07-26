// recebendo a lista de livros de duas editoras diferentes
const { edFolha, edGalho } = require('./arrays');

/* Jutando as listas de livros das 2 editoras e criando o catalogo por ordem de preco crescente */
const catalogo = edFolha.concat(edGalho).sort((a, b) => a.preco - b.preco);
console.log(catalogo);

// filtrando a lista por ordem de preco crescente
const catalogoFiltrado = catalogo.map((el) => el).sort((a, b) => a.preco - b.preco);
console.log(catalogoFiltrado);
