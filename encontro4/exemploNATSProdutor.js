const Hemera = require('nats-hemera');
const NATS = require('nats');

const http = require('http');

const client = NATS.connect();

const clienteHemera = new Hemera(client);

clienteHemera.ready(() => {
    const server = http.createServer((req, res) => {
        clienteHemera.act({
            topic: 'COMUNIDADES',
            cmd: 'node'
        }, (err, resposta)=> {
            console.log(resposta);
        })

        res.end('Publicação enviada.');
    });
    
    server.listen(8000);
    
    console.log('Escutando...'); 
});