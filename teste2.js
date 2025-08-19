function traduzirParaAilen(texto){
  const textoOpcional = `${texto}
  - De pequenos desejos,
  vagarosas saudades,
  silenciosas lembranças.`

  return textoOpcional;

}

function imprimirReceita(){
    const receita = "\n blaeh blaeh blaeh";
    console.log(receita);
    return receita;
}

const textoDias = traduzirParaAilen('De que são feitos os dias?')

const recel = imprimirReceita();

let final = textoDias + recel;

    final = final.replaceAll("a", "u");

final = final.replaceAll("a", "e").replaceAll("e", "u");

final = final.toUpperCase();

console.log(final);


