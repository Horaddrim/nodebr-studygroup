const { createWriteStream, readFileSync, createReadStream } = require('fs');

const escritaNoArquivo = createWriteStream('./ExemploDeWritableStream.txt', {autoClose: false});

const leituraDoArquivo = createReadStream('./roteiro-studyGroup.md');

escritaNoArquivo.on('error', () => console.log('error'));

for(let i = 0; i <= 10; i++) {
    escritaNoArquivo.write('Oi \n');
    // Isso da merda!
    // const conteudoDoArquivo = readFileSync('./ExemploDeWritableStream.txt');
    // console.log(conteudoDoArquivo.toString());
}

leituraDoArquivo.pipe(escritaNoArquivo);

escritaNoArquivo.close();