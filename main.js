"use strict";
const jugador = document.querySelector(".opcionjugador");
const mostrarjugador = document.querySelector(".mostrarjugador");
const ordenador = document.querySelector(".jugadaenemiga");
const resultado = document.querySelector(".resultado");
const btnjugar = document.querySelector(".jugar");

btnjugar.addEventListener("click", (ev) => {
  ev.preventDefault();
  const jugada = jugador.value;

  if (jugada === "1") {
    mostrarjugador.innerHTML = "1";
  }
  if (jugada === "2") {
    mostrarjugador.innerHTML = "2";
  } else if (jugada === "3") {
    mostrarjugador.innerHTML = "3";
  }
});
