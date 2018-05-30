const promiseSimples = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve({
        name: 'NodeBR',
    }), 5000);
});

function* generatorSimples() {
    let contador = 0;
    
    while(true) {
        contador++;
        yield contador;
    }
}

async function main() {
    
};


main();
