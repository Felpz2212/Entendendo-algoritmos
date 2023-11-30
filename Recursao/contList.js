let arr = [2,3,4,5,6];

function soma(arr){

    let arr2 = [];

    if(arr[0] == undefined){
        return 0;
    }else{
        for(let i = 1;arr[i] != undefined; i++){
            arr2[i - 1] = arr[i];
        }
        return 1 + soma(arr2);
    }
}

console.log(soma(arr));