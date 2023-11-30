var arr = [15, 5, 2, 1, 14, 12, 18, 23, 20];

function quicksort(array=[]){
    if(array.length < 2){
        return array;
    }
    let pivo = array[0];
    let menores = [];
    let maiores = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] > pivo){
            maiores.push(array[i]);
        }else if(array[i] < pivo){
            menores.push(array[i]);
        }
    }

    // [5,2,1] 15 [] = [1, 2, 5, 15]
    // quicksort([5,2,1])
    // [2,1] 5 [] = [1, 2, 5]
    // quicksort([2,1]);
    // [1] 2 [] = [1, 2]

    let arr = [];
    arr.push(quicksort(menores));
    arr.push(pivo);
    arr.push(quicksort(maiores));
    
    return arr;
}

console.log(...quicksort(arr));