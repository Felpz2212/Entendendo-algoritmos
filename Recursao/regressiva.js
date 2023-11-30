function regressiva(i){
    console.log(i);
    if(i <= 1){ // -> Caso base onde a recursão acaba
        return
    }else{
        regressiva(i - 1); // -> Caso recursivo
    }
}

regressiva(7);