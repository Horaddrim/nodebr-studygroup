const Hemera = require('nats-hemera');
const NATS = require('nats');

const cliente = NATS.connect();

const clienteHemera = new Hemera(cliente);

clienteHemera.ready(() => {
    clienteHemera.add({
        topic: 'COMUNIDADES',
        cmd: 'node'
    }, (req, done) => {
        console.log('Perguntaram no slack');
        done('Olá da NodeBR!');
    });
});

console.log('Esperando por publicações...');