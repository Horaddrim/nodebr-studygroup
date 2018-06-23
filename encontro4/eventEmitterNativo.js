const EventEmitter = require('events');
const http = require('http');

const meuEventEmitter = new EventEmitter();

const inscritoDoCanal = (publicacao) => {
    console.log(publicacao);
};

const publicacao = {
    mensagem: 'Olá..',
};

meuEventEmitter.on('NodeBR', inscritoDoCanal);

const server = http.createServer((req, res) => {
    meuEventEmitter.emit('NodeBR', publicacao);
    res.end('Publicação enviada.');
});

server.listen(8000);

console.log('Escutando...');

// Isso é parte do padrão Pub/Sub

// Padrão Publish/Subscribe
