const mongodb = require('mongodb');

// A função abre conexão só pode ser chamada, DEPOIS da server.js
async function abreConexao() {
    console.log(`
        Connecting to MongoDB on ${process.env.MONGO_URI}, at database: ${process.env.MONGO_NAME}
        `);
    // Coomo primeiro parametro, ele recebe uma URI
    // URI => Universal Resource Identifier -> Identificador unico universal
    // Como segundo parametro, recebe objeto de configuração 
    const client = await mongodb.connect(process.env.MONGO_URI, {
        reconnectTries: 7,
    });

    const db = client.db(process.env.MONGO_NAME);

    
    const users = db.collection('users');
    const community = db.collection('community');

    return {
        users,
        community,
    };
}

module.exports = abreConexao;