let num = document.querySelector("input#fnum");
let list = document.querySelector("select#flist");
let res = document.querySelector("div#res");
let values = [];

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else{
        return false; 
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else{
        return false;
    }
}

function play(){
    if(isNumber(num.value) && !inList(num.value, values)){
       values.push(Number(num.value));
       let item = document.createElement('option');
       item.text = `Valor ${num.value} adicionado!`;
       list.appendChild(item);
       res.innerHTML = "";
    } else{
        window.alert("Valor invalido ou ja encontrado na lista");
    }
    num.value = "";
    num.focus();
}

function end(){
    if(values.length == 0){
        window.alert("Por favor. adicione valores antes de finalizar!");
    } else{
        let total = values.length;
        let maior = values[0];
        let menor = values[0];
        let soma = 0;
        let media = 0;

        for(let i in values){
            if(maior < values[i]){
                maior = values[i];
            }
            if(menor > values[i]){
                menor = values[i];
            }
            soma += values[i];
        }
        media = soma/values.length;

        
        res.innerHTML = "";
        res.innerHTML += `<p>Total = ${total} numeros cadastrados.</p>`;
        res.innerHTML += `<p>Maior valor = ${maior}</p>`;
        res.innerHTML += `<p>Menor valor = ${menor}</p>`;
        res.innerHTML += `<p>Soma total = ${soma}</p>`;
        res.innerHTML += `<p>Media = ${media}</p>`;
    }
}