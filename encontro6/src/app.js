const Express = require('express');

const communityHandler = require('./handlers/community');
const personHandler = require('./handlers/person');


function main() {
    const app = Express();

    app.get('/community', communityHandler);

    app.get('/person', personHandler);

    app.listen(
        Number(process.env.PORT), 
        () => console.log(`Servidor escutando na porta ${process.env.PORT}`)
    );
}

module.exports = main;