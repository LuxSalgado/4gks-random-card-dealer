/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pinta = ["hearts", "spades", "diams", "clubs"];
  let valor = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let valorRandom = Math.floor(Math.random() * valor.length); //Genero un valor aleatorio para la carta
  let pintaRandom = Math.floor(Math.random() * pinta.length); //Genero una pinta aleatoria para la carta

  console.log(pinta[pintaRandom]); //Imprimo por consola para asegurar quen los valores son correctos
  console.log(valor[valorRandom]); //Imprimo por consola para asegurar quen los valores son correctos

  let cartaValor = document.getElementById("valorCarta"); //Guardo el elemento HTML con el id="valorCarta"
  cartaValor.innerHTML = "<b>" + valor[valorRandom] + "</b>"; //Le asigno el valor a la etiqueta HTML
  cartaValor.classList.add("gks-" + pinta[pintaRandom]); //Agrego la clase para cambiar el color del digito en la carta

  let vectorPinta = document.getElementsByClassName("pintaCarta"); //Guardo en un vector todos los elementos HTML con class="pintaCarta"
  vectorPinta[0].innerHTML = "&" + pinta[pintaRandom] + ";"; //Le asigno la pinta a la primera etiqueta HTML
  vectorPinta[1].innerHTML = "&" + pinta[pintaRandom] + ";"; //Le asigno la pinta a la segunda etiqueta HTML
  vectorPinta[0].classList.add("gks-" + pinta[pintaRandom]); //Agrego la clase para cambiar el color del simbolo superior de la carta
  vectorPinta[1].classList.add("gks-" + pinta[pintaRandom]); //Agrego la clase para cambiar el color del simbolo inferior de la carta

  let segundos = document.getElementById("segundos"); //Temporizador en reversa, 10 segundos
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 1 segundos";
  }, 9000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 2 segundos";
  }, 8000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 3 segundos";
  }, 7000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 4 segundos";
  }, 6000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 5 segundos";
  }, 5000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 6 segundos";
  }, 4000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 7 segundos";
  }, 3000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 8 segundos";
  }, 2000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 9 segundos";
  }, 1000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 10 segundos";
  }, 0);
};

document.getElementById("botonCarta").onclick = function() {
  //Funcion que se ejecuta al pulsar el boton
  let pinta = ["hearts", "spades", "diams", "clubs"];
  let valor = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let valorRandom = Math.floor(Math.random() * valor.length); //Genero un valor aleatorio para la carta
  let pintaRandom = Math.floor(Math.random() * pinta.length); //Genero una pinta aleatoria para la carta

  console.log(pinta[pintaRandom]); //Imprimo por consola para asegurar quen los valores son correctos
  console.log(valor[valorRandom]); //Imprimo por consola para asegurar quen los valores son correctos

  let cartaValor = document.getElementById("valorCarta"); //Guardo el elemento HTML con el id="valorCarta"
  cartaValor.innerHTML = "<b>" + valor[valorRandom] + "</b>"; //Le asigno el valor a la etiqueta HTML
  cartaValor.classList.remove(
    "gks-hearts",
    "gks-diams",
    "gks-clubs",
    "gks-spades"
  ); //Elimino todas las posibles pintas que pueda tener la carta, para poder agregar una nueva
  cartaValor.classList.add("gks-" + pinta[pintaRandom]); //Agrego la clase para cambiar el color del digito en la carta

  let vectorPinta = document.getElementsByClassName("pintaCarta"); //Guardo en un vector todos los elementos HTML con class="pintaCarta"
  vectorPinta[0].innerHTML = "&" + pinta[pintaRandom] + ";"; //Le asigno la pinta a la primera etiqueta HTML
  vectorPinta[1].innerHTML = "&" + pinta[pintaRandom] + ";"; //Le asigno la pinta a la segunda etiqueta HTML
  vectorPinta[0].classList.remove(
    "gks-hearts",
    "gks-diams",
    "gks-clubs",
    "gks-spades"
  ); //Elimino todas las posibles pintas que pueda tener la carta, para poder agregar una nueva
  vectorPinta[1].classList.remove(
    "gks-hearts",
    "gks-diams",
    "gks-clubs",
    "gks-spades"
  ); //Elimino todas las posibles pintas que pueda tener la carta, para poder agregar una nueva
  vectorPinta[0].classList.add("gks-" + pinta[pintaRandom]); //Agrego la clase para cambiar el color del simbolo superior de la carta
  vectorPinta[1].classList.add("gks-" + pinta[pintaRandom]); //Agrego la clase para cambiar el color del simbolo inferior de la carta
};

let temporizador = function() {
  //Funcion que se ejecuta cada 10 segundos
  let pinta = ["hearts", "spades", "diams", "clubs"];
  let valor = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let valorRandom = Math.floor(Math.random() * valor.length); //Genero un valor aleatorio para la carta
  let pintaRandom = Math.floor(Math.random() * pinta.length); //Genero una pinta aleatoria para la carta

  console.log(pinta[pintaRandom]); //Imprimo por consola para asegurar quen los valores son correctos
  console.log(valor[valorRandom]); //Imprimo por consola para asegurar quen los valores son correctos

  let cartaValor = document.getElementById("valorCarta"); //Guardo el elemento HTML con el id="valorCarta"
  cartaValor.innerHTML = "<b>" + valor[valorRandom] + "</b>"; //Le asigno el valor a la etiqueta HTML
  cartaValor.classList.remove(
    "gks-hearts",
    "gks-diams",
    "gks-clubs",
    "gks-spades"
  ); //Elimino todas las posibles pintas que pueda tener la carta, para poder agregar una nueva
  cartaValor.classList.add("gks-" + pinta[pintaRandom]); //Agrego la clase para cambiar el color del digito en la carta

  let vectorPinta = document.getElementsByClassName("pintaCarta"); //Guardo en un vector todos los elementos HTML con class="pintaCarta"
  vectorPinta[0].innerHTML = "&" + pinta[pintaRandom] + ";"; //Le asigno la pinta a la primera etiqueta HTML
  vectorPinta[1].innerHTML = "&" + pinta[pintaRandom] + ";"; //Le asigno la pinta a la segunda etiqueta HTML
  vectorPinta[0].classList.remove(
    "gks-hearts",
    "gks-diams",
    "gks-clubs",
    "gks-spades"
  ); //Elimino todas las posibles pintas que pueda tener la carta, para poder agregar una nueva
  vectorPinta[1].classList.remove(
    "gks-hearts",
    "gks-diams",
    "gks-clubs",
    "gks-spades"
  ); //Elimino todas las posibles pintas que pueda tener la carta, para poder agregar una nueva
  vectorPinta[0].classList.add("gks-" + pinta[pintaRandom]); //Agrego la clase para cambiar el color del simbolo superior de la carta
  vectorPinta[1].classList.add("gks-" + pinta[pintaRandom]); //Agrego la clase para cambiar el color del simbolo inferior de la carta

  let segundos = document.getElementById("segundos"); //Temporizador en reversa, 10 segundos
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 1 segundos";
  }, 9000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 2 segundos";
  }, 8000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 3 segundos";
  }, 7000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 4 segundos";
  }, 6000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 5 segundos";
  }, 5000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 6 segundos";
  }, 4000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 7 segundos";
  }, 3000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 8 segundos";
  }, 2000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 9 segundos";
  }, 1000);
  setTimeout(function() {
    segundos.innerHTML = "Nueva carta en: 10 segundos";
  }, 0);
};

document.getElementById("botonTamano").onclick = function() {
  //Funcion para cambiar las dimensiones de la carta
  let alto = document.getElementById("altoCarta").value; //Obtengo el valor del imput con el id="altoCarta"
  let ancho = document.getElementById("anchoCarta").value; //Obtengo el valor del imput con el id="anchoCarta"
  document.getElementById("naipe").style.height = alto + "px"; //Especifico el alto de la carta
  document.getElementById("naipe").style.width = ancho + "px"; //Especifico el ancho de la carta
};

window.setInterval(temporizador, 10000); //Llamo a la funcion temporizador cada 10 segundos
