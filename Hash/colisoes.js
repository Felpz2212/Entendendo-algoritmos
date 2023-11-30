let produtos = new Map();

let listItens = new Array();

let item = {
    id: Number,
    valor: Number,
    proximo: Number || null
};

listItens.push({id: 1, valor: 2.5, proximo: 2});
listItens.push({id: 2, valor: 3.5, proximo: 3});

produtos.set("a", listItens);
produtos.set("b", "banana");

console.log(produtos.get("a"));
listItens.push({id: 3, valor: 5.5, proximo: null});
console.log(produtos.get("a"));