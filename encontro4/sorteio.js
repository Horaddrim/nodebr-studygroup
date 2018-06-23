const numeros = [8, 69, 33, 25, 27, 42, 1, 51];

// Assim que se gera um numero aleatorio entre...
const numeroDaSorte = Math.floor((Math.random() * 6) + 0);

const participantes = {
    8: 'Fulvio',
    69: 'Kaleb',
    25: 'Bruno',
    27: 'Paulo',
    42: 'Vedolin',
    33: 'Thijack',
    1: 'Alexandre',
    51: 'Helio'
};


setTimeout(() => console.log(`O vencedor que vai curtir o JS Experience 
é => ${participantes[numeros[numeroDaSorte]]}`), 5000);

