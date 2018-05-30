const fs = require('fs');

const novaPromise = new Promise(function (resolve, reject) {
 // como construir uma Promise nova.
});

function pegaOConteudoDoArquivo(nomeDoArquivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(nomeDoArquivo, (err, file) => {
            if(err) reject(err);

            resolve(file.toString());
        }); 
    });
};

function salvaOArquivoNoBancoDeDados(conteudo) {
    // Logica de inserir no banco!
    return "Salvo.";
}

// Toda Promise tem 3 estados:
// 1 - Pending => Quando ainda ela está executando.
// 2 - Resolved => Quando consegue retornar o resultado e não deu erro.
// 3 - Rejected => Quando acontece um erro.


const promiseModificada = pegaOConteudoDoArquivo('./exemplo.txt')
// Quando a Promise for resolvida com sucesso, ele chama a função que você passar pro then
.then(salvaOArquivoNoBancoDeDados)
// Esse segundo then, vai receber o retorno do primeiro.
.then(console.log)
// Caso aconteça um erro, ou seja for rejeitada, ele chama o catch
.catch(console.log);


// Exemplo com async/await

async function main() {
    const resultadoDaEscritaNoBancoDeDados = await promiseModificada;

    console.log(`Resultado => ${resultadoDaEscritaNoBancoDeDados}`);
};

main();

