function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML= `Agora sao <strong>${hora}H</strong>.`;

    if(hora >= 5 && hora <= 12){
        img.src = "foto1.png";
        document.body.style.background = '#448600';   
    }
    else if(hora >= 12 && hora <= 18){
        img.src = "foto2.png";
        document.body.style.background = '#bf6b3d';
    }
    else{
       img.src = "foto3.png";
       document.body.style.background = '#0c014b'; 
    }
}