class MelhorPersonagem {
    constructor() {
        this.nome = "Rick Sanchez";
    }
}

const melhorPersonagem = new MelhorPersonagem(); 

console.log(`COM CLASSE -> ${melhorPersonagem.nome}`);

function FuncaoMelhorPersonagem() {
    this.nome = "Rick Sanchez";
}

const melhorPersonagemCriadoComFuncao = new FuncaoMelhorPersonagem();

console.log(`COM FUNCTION -> ${melhorPersonagemCriadoComFuncao.nome}`);
