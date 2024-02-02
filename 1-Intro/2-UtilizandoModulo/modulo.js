//lendo arquivo no nodejs sem instalar módulo nenhum, utilizando coremodule

const fs = require('fs'); //importando arquivo file system e adicionando a uma variável com o mesmo nome por convenção

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
