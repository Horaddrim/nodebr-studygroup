const bodyparser = require('body-parser');
const Express = require('express');

const communityHandler = require('./handlers/community');
const abreConexao = require('./db/mongo.connnection');
const personHandler = require('./handlers/person');



async function main() {
    const app = Express();

    const client = await abreConexao();

    app.use(bodyparser.json());

    const logger = (dados) => console.log(dados);
    
    app.use('*', async (req, res, next) => {
        req.db = client;
        // Exemplo de uma função helper
        req.logger = logger;
        
        next();
    });

    app.get('/community', communityHandler.getHandler);

    app.get('/person', personHandler.getHandler);
    app.post('/person', personHandler.postHandler);

    app.listen(
        Number(process.env.PORT), 
        () => console.log(`Servidor escutando na porta ${process.env.PORT}`)
    );
}

module.exports = main;
