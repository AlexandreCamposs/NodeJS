const fetch = require("node-fetch");

function manejaErros(erro) {
  throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise.all(
      arrayURLs.map(async (url) => {
        const res = await fetch(url);
        return res.status;
      })
    );
    return arrayStatus;
  } catch (erro) {
    manejaErros(erro);
  }
}

function gerraArrayDeURLs(arraylinks) {
  //loop para cada { chave: valor}
  // objeto -> [valor]
  //Object.values(objeto)
  return arraylinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function validaUrls(arraylinks) {
  const links = gerraArrayDeURLs(arraylinks);
  const statusLinks = await checaStatus(links);
  //spread operator
  const resultados = arraylinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice],
  }));
  return resultados;
}

module.exports = validaUrls;
