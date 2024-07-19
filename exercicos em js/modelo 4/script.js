function play(){
    let receive_num = document.getElementById("txtn");
    let receive_tab = document.getElementById("seltab");

    if(receive_num.value.length == 0){
        window.alert("Por favor, digite um numero!");
    } else{
        let number = Number(receive_num.value);
        let i=0;
        receive_tab.innerHTML = "";

        while (i <= 10) {
            let item = document.createElement("option");
            item.text = `${number} x ${i} = ${number*i}`;
            item.value = `tab ${i}`;
            receive_tab.appendChild(item);
            i++;
        }
    }
}



