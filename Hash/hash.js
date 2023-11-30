let votaram = new Map();

function verificaVoto(nome){
    if(votaram.has(nome)){
        console.log("Mande embora");
    }else{
        console.log("Deixe votar");
        votaram.set(nome, true);
    }
}


verificaVoto("Felipe");
verificaVoto("Jose");
verificaVoto("Felipe");