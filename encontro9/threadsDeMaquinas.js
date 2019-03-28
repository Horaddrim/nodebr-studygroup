const {
    Worker, isMainThread, parentPort
  } = require('worker_threads');

  if (isMainThread) {
        const worker = new Worker(__filename);

        worker.on('message', function(conteudo) {
          if(conteudo === 'Rick') {
            worker.postMessage('Vovô');
          }

          if(conteudo === 'Morty') {
            worker.postMessage('Neto');
          }
        });

        worker.on('error', console.log);

        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
  } else {
    parentPort.postMessage('Morty');
    parentPort.on('message', console.log);
  }
