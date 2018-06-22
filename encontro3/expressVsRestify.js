const express = require('express');
const restify = require('restify');

const appExpress = express();
const appRestify = restify.createServer();

appExpress.get('/nodebr', (req, res, next) => {
    res.send('Oi');
    next();
});

appRestify.get('/users', restify.plugins.conditionalHandler([
    {
        version: '1.0.0', handler: (req, res, next) => {
            res.send('Versão 1.0.0');
            next();
        }
    },
    {
        version: '2.1.0', handler: (req, res, next) => {
            res.send('Versão 2.1.0');        
            next();
        }
    }
]));

appExpress.listen(8000, () => console.log('Express rodando...'));
appRestify.listen(9000, () => console.log('Restify rodando...'));