var ola = "Ola"
 console.log(ola);
function log(valor) {
    console.log(valor);
}

//tipos de variaveis 
 
var valor = 10;
log(typeof valor); //number

var palavra = "Zion"
log(typeof palavra); //string

var isOK = true 
log (typeof isOK); //boolean

var meuObj = {}; // Object
var meuArray = []; //Array
var nulo = null; //null
var variavelFlamengo; // Undefind

//Escopo de variável 
function compararEscopo() {
    if(true){
        var varDentro = "Var detro do bloco";
        let letDentro = "Let dentro o bloco";
        const constDentro = "Const dentro do bloco";

        log(varDentro);
        log(letDentro);
        log(constDentro);
    }
    log(varDentro)
}
compararEscopo();

//operações Simple 

const n1 = 1;
const n2 = 5;
const valorNumericoStr = '5';

log(n1 + n2); //6
log(n1 * n2); //5
log(n1 / n2); //0.2

log(n1 == n2); //false
log(n2 == valorNumericoStr);//true
log(n2 === valorNumericoStr);//false

log((n2 > n1 || n2 > n1) && 1 > 2);

//Manipulando arrays

let frutas = ["Maçã",'banana', 'laranja']
log(frutas.length); //3
log(frutas[1]);

log(frutas);

frutas.pop(); // Remove o último

log(frutas);

frutas.push("Manga"); // Adiciona um elemento

log(frutas);

//estruturas condicionadas 
const idade = 20;
if(idade >= 18){
    log("Sou adulto");
} else if(idade >=2){
    log("Sou criança");
}else {
    log("Sou bebê");
}
const instituto ="CEUB";

switch(instituto) {
    case 'CEUB':
        log("Faculdade");
    case "CIL":
         log('Escola de línguas');
    case "CEM10":
        log("Escola");
}

for (let loop = 1; loop <= 5; loop++){
    log(`Meu valor no loop:${loop}`);
}

let valorwhile = 0;
while(valorwhile < 5){
    log(`Meu valor no while:${valorwhile}`)
    valorwhile++
}

//Funções Assíncronas permitem executar operações 
// sem bloquear a execução do código

async function buscarDados() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dados Recebidos")
        }, 4*1000);
    });
}

async function ExecutarBuscas() {
    log("Buscando......")
    let resultado = await buscarDados();
    log(resultado);
}

ExecutarBuscas();

const meuMetodo = function exemploMetodo() {
    log("Executei por metodo normal");
};

log(meuMetodo);

const objTeste = {
    oi() {
        log("oi");
    },
    tchau(){
        log("tchau");
    },
};
objTeste.oi();
objTeste.tchau()