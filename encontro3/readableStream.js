const { createReadStream } = require('fs');

// O que é uma Stream??
// Uma Stream => Fluxo de dados! Podem ser binarios, pode ser texto, podem ser objetos;
// ReadableStream => Uma Stream que serve para leitura;
// WritableStream => Uma Stream que você escreve;

// Consumindo Streams: 
// 1 - Buffer, onde você acumula tudo, e depois retorna o Buffer;
// 2 - Consume ela com Eventos;

const streamDoLoremIpsum = createReadStream('./../LoremIpsum1.txt');

streamDoLoremIpsum.on('open', () => console.log('A Stream Abriu'));

streamDoLoremIpsum.on('data', (data) => {
    console.log(`O dado da stream => ${data.toString()}`);
    if(data.toString().indexOf('Igor') !== -1) {
        streamDoLoremIpsum.close();
    }
});

streamDoLoremIpsum.on('error', (error) => console.log(error));

streamDoLoremIpsum.on('close', () => console.log('A Stream fechou'));