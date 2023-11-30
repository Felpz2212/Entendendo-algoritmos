let arr = [2,4,6];

function soma(arr){
    if(arr.length <= 0){
        return 0;
    }else{
        let arr2 = [];
        for(let i = 1; i < arr.length; i++){
            let aux = arr[i];
            arr2[i - 1] = aux;
        }
        return arr[0] + soma(arr2);
    }
}

console.log(soma(arr));