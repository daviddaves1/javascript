function processing(){
    var input = Number(window.document.querySelector("input#input_number").value);
    var jump = Number(window.document.querySelector("input#acrescimos").value);
    var end = Number(window.document.querySelector("input#end_number").value);
    var result = window.document.querySelector("div#result");

    result.innerHTML = `<strong>Resultados: </strong>`;

    if (jump <= 0 || input == 0 || end == 0){
        result.innerHTML = "Impossivel contar! Verifique e tente novamente.";
        return 0;
    }
    else if(input > end || input == end || end == input){
        for(var i = input; i >= end; i -= jump){
            result.innerHTML += `<strong>${i} \u{1f449} </strong>`;
            //Contagem crescente
        }
    }
    else if(input < end){
        for(var i = input; i <= end; i += jump){
            result.innerHTML += `<strong>${i} \u{1f449} </strong>`;
            //Contagem decrescente
        }
    }
    result.innerHTML += `\u{1F3C1}`
}