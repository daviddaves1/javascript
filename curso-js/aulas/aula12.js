var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora}H`)
if(hora >= 6  && hora < 13){
    console.log("Bom dia")
}
else if(hora >= 13 && hora < 19){
    console.log("Boa tarde")
}
if(hora >= 19){
    console.log("Boa noite")
}