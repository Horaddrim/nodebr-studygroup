// Variavel comum, detalhe pra notação antiga
var variavel = "Igor Franca";

// Contante, ela não pode ter seu valor alterado
const variavel2 = "NodeBR";

// Let, tem o mesmo comportamento da var
// Só que, ela preserva o escopo.
let variavel3 = "Nerdzão";

const numero1 = 1; // Number
const numero2 = "1"; // String

// O operador Triple Equals compara o TIPO das variaveis
// Além do seu valor;
if(numero1 === numero2 && numero1 > 0) {
    // console.log("Passou do If");
} else {
    // console.log("Caiu no else");
}

// >>> <<< São operadores de BYTES / BITS
// const buffer = Buffer.alloc(2);
// buffer.write("1"); 

// console.log(buffer);




// console.log("Simplesmente continuou");

switch(numero1) {
    case "1":
        // console.log("Dentro do switch");
        break;
    default:
        // console.log("Dentro do default");
}


const Rick = {
    nome: "Rick Sanchez",
    idade: 80,
    netos: [
        {
            nome: "Morty"
        },
        {
            nome: "Summer"
        }
    ],
};

console.log(Rick.dimensao);

Rick.dimensao = "C-137";

console.log(Rick.dimensao);

Rick.idade = 60;

console.log(JSON.stringify(Rick, null, 2));

console.log("O tipo do Rick é: " + typeof Rick);
console.log("O tipo do NULL é: " + typeof null);