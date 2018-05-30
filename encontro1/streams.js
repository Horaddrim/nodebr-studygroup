const fs = require('fs/promises');
const http = require('http');

const httpServer = http.createServer();

httpServer.on('request', async (req, res) => {
    const data = await fs.readFile('./LoremIpsum.txt').toString();
    res.end(data);
});

console.log(`Server listenning on port => http://localhost:8000`);

httpServer.listen(8000);