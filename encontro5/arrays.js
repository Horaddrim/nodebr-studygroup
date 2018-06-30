const Ricks = [
    {
        nome: "Rick Sanchez",
        dimensao: "C-137,"
    },
    {
        nome: "Rick Sanchez",
        dimensao: "C-500",
    },
];


const funcaoDeMapearOsRicks = function(rick) {
    return rick.netos = [
        {
            nome: "Morty Smith",
            dimensao: "C-137"
        },
        {
            nome: "Summer Smith",
            dimensao: "C-137",
        },
    ];
};

// Uma função que vai rodar num filter 
// SEMPRE deve retornar ou true, ou false
// boolean
const funcaoQueFiltraRicks = function(rick) {
    if(rick.dimensao === "C-500") {
        return true;
    } else {
        return false;
    }
};

const funcaoQueAgregaOsRicks = function(acumulador, itemAtual) {
    console.log(JSON.stringify(itemAtual, null, 2));
    return acumulador + itemAtual.netos.length;
};

// const funcaoQueAgregaOsRicks = (acumulador, itemAtual) => {
//     return acumulador + itemAtual.netos.length;
// };


Ricks.map(funcaoDeMapearOsRicks);

const novosRicks = Ricks.filter(rick => rick.dimensao === "C-500");

// console.log(novosRicks);

const ricksReduzidos = Ricks.reduce(funcaoQueAgregaOsRicks, 0); // Ou Ricks.reduceRight();

console.log("RESULTADO DA REDUÇÃO: " + ricksReduzidos);