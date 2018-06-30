
// Estado da Promise;
// Pendente - Quando ela está executando, mas ela nem resolveu, nem se rejeitou ainda.
// Resolvida - Quando ela deu bom, retorna o objecto.
// Rejeitada - Quando deu ruim, então ela retorna um erro.
const comprarUmMac = () => new Promise((resolver, rejeitar) => {
  setTimeout(() => rejeitar(new Error("Porque Comprei um carro.")), 2000);  
})

.then((outputDaUltimaChamada) => {
    return outputDaUltimaChamada;
})

.then((outputDaUltimaChamada) => {
    if(outputDaUltimaChamada.mensagem.length <= 5) {
        return "OI";
    }
})
.catch((err) => {
    if(err.message.startsWith("Comprei")) {
        console.log("Deu ruim");
    }
    return err;
});

async function main() {
    const minhaPromesa = await comprarUmMac();
}

main();