function fatorial(i){

    if(i == 1){
        return 1; // -> Caso base onde a recursão é finalizada evitando loop infinito
    }else{
        return i * fatorial(i - 1); // -> Caso recursivo
    }
}

console.log(fatorial(3));

/* 
    -> Chama o fatorial de 3
    -> Como 3 é diferente de um a função deverá retornar 3 * fatorial(3-1);
    -> A função para ser finalizada depende do resultado de fatorial(3 - 1) para obter um resultado;
    -> Realiza-se então fatorial(2);
    -> 2 não é igual a um então retorna-se 2 * fatorial(1);
    -> O fatorial de 2 depende de fatorial(1) para obter resposta;
    -> Realiza-se o fatorial de 1;
    -> Como um é igual a um retorna-se o proprio 1;
    -> Assim conseguimos concluir o fatorial(2) retorando - 2 * fatorial(1) == 2 * 1 == 2;
    -> Assim também concluimos o fatorial(3) retornando - 3 * fatorial(2) == 3 * 2 == 6; 
*/