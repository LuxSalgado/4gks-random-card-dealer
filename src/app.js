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
};
