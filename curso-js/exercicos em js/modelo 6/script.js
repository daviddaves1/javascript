let nomeLutador
let nationality
let idade
let peso
let altura = 1.83

nomeLutador = document.querySelectorAll('main p')[0]
nomeLutador.innerHTML += "Fedor Vladimirovich Emelianenko"

nationality = document.querySelectorAll('main p')[1]
nationality.innerHTML += "Russo"

idade = document.querySelectorAll("main p")[2]
idade.innerHTML += 44

peso = document.querySelectorAll("main p")[3]
peso.innerHTML += 106

altura = document.querySelectorAll("main p")[4]
altura.innerHTML += 1.83

let data = document.querySelectorAll(".input1")[0]

data.innerHTML = `<p>Data escolhida: ${data}`