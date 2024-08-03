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

const dataInput = document.querySelector('.input1');
const resultado = document.querySelector('.resultado');
const fraseColetada = document.querySelector(".input2");
const fraseResultado = document.querySelector('.fraseResultado');

dataInput.addEventListener('change', () => {
  resultado.textContent = `Data informada: ${dataInput.value}`;
});

fraseColetada.addEventListener('change', () => {
  fraseResultado.textContent = `Frase escrita: ${fraseColetada.value}`;
});

let array = document.querySelectorAll(" main p")[6]

array.innerHTML += [" Janeiro", " Fevereiro ", " Março", " Abril", " Maio", " Junho", " Julho", " Agosto", " Setembro", " Outubro", " Novembro", " Dezembro"];

let jogo = {
    nome : "League of Legends",
    desenvolvedora : "Riot Games",
    ano : 2016,
}

