"use strict"

let horas = 0
let minutos = 0
let segundos = 0

let tempo = 1000
let cronometro

// Inicia o cronômetro
function start() {
    cronometro = setInterval(() => { timer() }, tempo)
}
// Para o cronômetro
function pause() {
    clearInterval(cronometro)
    
}
// Limpa o cronômetro
function stop() {
    clearInterval(cronometro)
    horas = 0
    minutos = 0
    segundos = 0

    document.getElementById("counter").innerText = "00:00:00"
}

//Efetua a contagem
function timer() {
    segundos++

    if (segundos == 59) {
        segundos = 0
        minutos ++

        if ( minutos == 59) {
            minutos = 0
            horas ++

        }
    }

    let format = (horas < 10 ? "0" + horas : horas) + ":" + (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos)
    document.getElementById("counter").innerText = format

    return format
}