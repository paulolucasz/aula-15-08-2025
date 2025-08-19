function imprimirIngredientes(porcoes){
    
    const textoDosIngredientes = `Ingredientes para ${porcoes} porções: ovos e pão. `;

   
    return textoDosIngredientes;
}

function imprimirReceita(){
    const receita = "blah blah blah";
    console.log(receita); 
    return receita;
}

const ingredientes = imprimirIngredientes(200);

const recel = imprimirReceita();

let final = ingredientes + recel;

final = final.replaceAll("a", "u");

console.log(final);