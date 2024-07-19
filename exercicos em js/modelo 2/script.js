function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = window.document.getElementById('txtano')
    var result = document.querySelector('div#result')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'Layer2.png')
            }
            else if(idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'Layer4.png')
            }
            else if(idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'Layer6.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'Layer8.png')
            }
        }
        else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'Layer1.png')
            }
            else if(idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'Layer3.png')
            }
            else if(idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'Layer5.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'Layer7.png')
            }
        }
        result.style.textAling = "center"
        result.innerHTML = `Detectamos ${genero}     com ${idade} anos.`
        result.appendChild(img)

    }



}