//Encontrar caminho minimo de um ponto a outro

var grafo = new Map();

grafo.set("inicio", [1,2]);
grafo.set("1", [3,5]);
grafo.set("2", [3,4]);
grafo.set("3", []);
grafo.set("4", [5]);
grafo.set("5", "final");

let list = new Array();

var verificado = new Map();

list.push(...grafo.get("inicio"));
// console.log(list)

var i = 0;
while(list.length > 0){
   console.log(list);
    let vertice = list.shift();
    if(!verificado.get(vertice)){
        if(grafo.get(`${vertice}`) == "final"){
            list = []
            break;
        }else{
            // console.log(vertice);
            list.push(...grafo.get(`${vertice}`));
            verificado.set(vertice, true);
        }
    }
}