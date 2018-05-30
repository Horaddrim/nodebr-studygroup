const fs = require('fs');

// o watch olha todo um diretório, e consegue acionar essa função,
// Toda vez que houver uma alteração no diretório que você pedir para ele observar
fs.watch('./../encontro1', {encoding: 'buffer'}, (evento, arquivoAlterado) => {
    console.log(`Nome do arquivo: ${arquivoAlterado.toString()}`);
});

// Também temos o watchFile, para escutar apenas um arquivo, recebendo informações pertinentes
// Ao arquivo em si, como tamanho e horário da modificação
fs.watchFile('./exemplo.txt', (statusAtual, statusAntigo) => {
    console.log(`Status Atual => ${statusAtual}`);
    console.log(`Status antigo => ${statusAntigo}`);
})

// O writeFile consegue escrever dados em um arquivo, trabalhando com callbacks!
fs.writeFile('./exemplo.txt', 'Saytama é um monstro!', (err) => {
    if(err) console.log(err);
});

// Caso queira trabalhar de maneira mais confortável com o WriteFile
fs.writeFileSync('./exemplo.txt', 'Oi Oi Oi');

// O readFile le o conteudo de um arquivo e de devolve um Buffer, ou um array de bytes, para você
// consumir os dados, caso queira usá-lo como uma String, basta chamar o método Buffer.prototype.toString
fs.readFile('./exemplo.txt', (err, bufferDoArquivo) => {
    if(err) console.log(err);
    console.log(bufferDoArquivo.toString());
    // Você também pode transformar o Buffer em um JSON, chamando o método Buffer.prototype.toJSON
    console.log("Buffer em JSON" + bufferDoArquivo.toJSON());
});

// Assim como o writeFile, existe a versão síncrona do readFile
const bufferDoArquivo = fs.readFileSync('./exemplo.txt');

