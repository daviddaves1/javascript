let num = [5, 8, 2, 9, 3];
num.push(1); //adicionando valor
num.sort(); //ordenando array
console.log(num);
console.log(`O array tem ${num.length} posicoes`);
let i = num.indexOf(8); /* comando para procurar um valor dentro do array, no entanto ele retorna -1 caso o valor nao
for encontrado, e para mostrar de um modo mais intuitivo, e melhor usar estruturas condicionais. */
console.log(`O valor 8 esta na posicao = ${i}`);


