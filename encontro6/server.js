const dotenv = require('dotenv');

const app = require('./src/app');

function main() {
    switch(process.env.NODE_ENV) {
        case 'PRODUCAO':
        dotenv.config({path: './config/.env.prod'});
        break;
        case 'DESENVOLVIMENTO':
        dotenv.config({path: './config/.env.dev'});
        break;
        default:
        dotenv.config({path: './config/.env.dev'});
    }
    
    app();
}

main();