let values = [5, 2, 8, 9, 3];
console.log(values); //essa aqui e a forma menos intuitiva de mostar o vetor, pois vai ficar aparecendo os colchetes
values.sort(); //ordenando o vetor

for(let i=0; i<values.length; i++){
    console.log(`Valor da posicao ${i} = ${values[i]}`);
}   /* usar o for e uma forma inteligente de mostrar os elementos do vetor, pois assim
nao ha necessidade de escrever linhas de codigo para mostar os resultados. */

for(let index in values){
    console.log(`Valor da posicao ${index} = ${values[index]}`);
} //essa forma e otima, pois e mais simplificada ainda.