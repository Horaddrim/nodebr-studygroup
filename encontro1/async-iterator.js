const got = require('got');

async function* linhas(url, separador = '\n') {
  let acumulador = '';

  const stream = got.stream(url, {encoding: 'utf8'});

  for await (const pedacinho of stream) {
    acumulador += pedacinho;
    let index;

    while ((index = acumulador.indexOf(separador)) !== -1) {
      yield acumulador.substring(0, index);
      acumulador = acumulador.substring(index + 1);
    }
  }

  if (acumulador) {
    yield acumulador;
  }
}


async function lerTodasAsLinhas() {
  let numero = 0;

  for await (const linha of linhas('https://raw.githubusercontent.com/nodejs/node/master/LICENSE')) {
    if(numero === 1000) {
      break;
    }
    
    console.log('%s: %s', numero++, linha);
  }
}

lerTodasAsLinhas();