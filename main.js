"use strict";
const jugador = document.querySelector(".opcionjugador");
const mostrarjugador = document.querySelector(".mostrarjugador");
const ordenador = document.querySelector(".jugadaenemiga");
const resultado = document.querySelector(".resultado");
const btnjugar = document.querySelector(".jugar");

btnjugar.addEventListener("click", (ev) => {
  ev.preventDefault();
  const jugada = jugador.value;
  const jugadaordenador = generarMovimiento();
  ordenador.innerHTML = jugadaordenador;
  if (jugada === "1") {
    mostrarjugador.innerHTML = "🖐️";
  }
  if (jugada === "2") {
    mostrarjugador.innerHTML = "✊";
  } else if (jugada === "3") {
    mostrarjugador.innerHTML = "✌️";
  }
  if (jugadaordenador === "✊" && jugada === "1") {
    resultado.innerHTML = "PERDISTE";
  } else if (jugadaordenador === "✌️" && jugada === "2") {
    resultado.innerHTML = "PERDISTE";
  } else if (jugadaordenador === "🖐️" && jugada === "3") {
    resultado.innerHTML = "PERDISTE";
  } else if (jugadaordenador === jugada) {
    resultado.innerHTML = "EMPATE";
  } else {
    resultado.innerHTML = "GANASTE";
  }
});

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}

function generarMovimiento() {
  const numero = getRandomNumber(10); 
  if (numero <= 3) {
    return "✊";
  } else if (numero >= 7) {
    return "🖐️";
  } else {
    return "✌️";
  }
}

console.log(generarMovimiento());



