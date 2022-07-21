const infoLivros = require('./listaLivros');

const precoLivros = infoLivros.map((el) => el.valor);

const menorValor = infoLivros.reduce((acc, atual) =>
	acc.valor < atual.valor ? acc : atual
);

const maiorValor = infoLivros.reduce((acc, atual) =>
	acc.valor > atual.valor ? acc : atual
);

console.log(maiorValor);
