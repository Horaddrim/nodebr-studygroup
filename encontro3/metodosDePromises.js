const retornaPromiseDe3segundos =  
    () => new Promise((resolve, reject) => setTimeout(() => resolve('Promise 1'), 3000));
const retornaPromiseDe4segundos =  
    () => new Promise((resolve, reject) => setTimeout(() => resolve('Promise 2'), 4000));
const retornaPromiseDe5segundos =  
    () => new Promise((resolve, reject) => setTimeout(() => resolve('Promise 3'), 5000));

async function mainPromiseAll() {
    const resultados = await Promise.all([
        retornaPromiseDe3segundos(),
        retornaPromiseDe5segundos(),
        retornaPromiseDe4segundos(),
    ]);

    console.log(`Resultado do Promise.all => ${resultados}`);
}

async function mainPromiseRace() {
    const resultado = await Promise.race([
        retornaPromiseDe3segundos(),
        retornaPromiseDe4segundos(),
        retornaPromiseDe5segundos(),
    ]);

    console.log(`Resultado do Promise.race => ${resultado}`);
}
 
// mainPromiseAll();
mainPromiseRace();

