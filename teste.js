const nome = "Arthur"; 
const nome1 = "Arthur disse 'ola' ";
const introd = " Meu nome é " + nome;
const idade = 2;
const frase2 = "Eu tenho " + idade + " anos"


console.log("Olá,", nome);
console.log("A terceira letra do meu nome é", nome[2]);
console.log(introd, frase2);
console.log(`Meu nome é ${nome} e minha idade é ${idade}!`);



function adaptaringredientes(porcoes) {
    const qtdOvos = 2;
    const qtdPao = 1;
    const porcaoOrig = 1;

    console.log(`\n{Receita Pão com ovo para ${porcoes} pessoas}`); 
    console.log(`${qtdOvos * porcoes} ovos`);
    console.log(`${qtdPao * porcoes} pães`);
}


adaptaringredientes(3); 

const frase = "O Breno chegou 5 minutos atrasado";
console.log(frase.replaceAll("Breno", ""));

function fazerBrigadeiro (quantidadeDeReceitas) {

    const porcaoBase = 1;
    const latasLeiteCondensado = 1;
    const colheresChocolatePo = 4;
    const colherManteiga = 1;

    console.log(`\n--- Receita de Brigadeiro para ${quantidadeDeReceitas} receita(s) ---`);
    console.log(`${latasLeiteCondensado * quantidadeDeReceitas} lata(s) de leite condensado`);
    console.log(`${colheresChocolatePo * quantidadeDeReceitas} colheres de sopa de chocolate em pó`);
    console.log(`${colherManteiga * quantidadeDeReceitas} colher(es) de sopa de manteiga`);
}

fazerBrigadeiro(5);

