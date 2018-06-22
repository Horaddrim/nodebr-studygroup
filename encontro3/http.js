const http = require('http');

const { createReadStream } = require('fs');

const server = http.createServer((req, res) => {
    console.log('Recebendo conexão');

    const stream = createReadStream('./../LoremIpsum.txt');

    stream.pipe(res);
});

server.listen(5000, () => console.log('Escutando na porta 5000'));