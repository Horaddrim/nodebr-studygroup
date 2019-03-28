const cluster = require('cluster');

if(cluster.isMaster) {
    console.log(`
        Process MASTER is running on ${process.pid}
        and the variable isMaster is ${cluster.isMaster}
    `);

    cluster.fork();
}  else {
    console.log(`
        Process WORKER is running on ${process.pid}
        and the variable isWorker is ${cluster.isWorker}
    `);

    process.exit(1);
};