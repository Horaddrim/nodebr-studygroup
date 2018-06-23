// const EventEmitter = require('events');
const topicos = new Map();

const EventEmitter = {
    inscreverParaOTopico(topico, inscrito) {
        if(!topicos.has(topico)) topicos.set(topico, []);

        topicos.get(topico).push(inscrito);
    },

    publicaEmUmTopico(topico, publicacao) {
        if(!topicos.has(topico)) return;

        const inscritos = topicos.get(topico);

        inscritos.map((inscrito) => inscrito(publicacao));
    }
};


const incritoDoCanal = (publicacao) => {
    console.log(`PUBLICAÇÃO RECEBIDA => ${JSON.stringify(publicacao, null, 2)}`);
};

const botDoGoogle = (publicacao) => {
    if(publicacao.mensagem.length > 3) {
        console.log('Aprovada.');
    } else {
        console.log('Reprovada.');
    }
}

EventEmitter.inscreverParaOTopico('NodeBR', incritoDoCanal);

EventEmitter.inscreverParaOTopico("NodeBR", (publicacao) => {
    console.log(`PUBLICAÇÃO RECEBIDA => ${JSON.stringify(publicacao, null, 2)}`);
});

EventEmitter.inscreverParaOTopico("NodeBR", botDoGoogle);

const http = require('http');

const server = http.createServer((req, res) => {
    EventEmitter.publicaEmUmTopico('NodeBR', {
        mensagem: 'Re',
    });
    
    res.end('Publicação enviada.');
});

server.listen(8000);

console.log('Escutando...');

