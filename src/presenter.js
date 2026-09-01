import sumar from "./sumador";
import marcador from "./marcador";

const resultado = document.querySelector("#resultado-div");
const button_player1= document.querySelector("#primer-jugador-anota");
const button_player2= document.querySelector("#segundo-jugador-anota");
let number_player1=0;
let number_player2=0;
button_player1.addEventListener("click", () => {
    number_player1=sumar(number_player1);
    resultado.innerHTML=marcador(number_player1,number_player2);

});
button_player2.addEventListener("click", () => {
    number_player2=sumar(number_player2);
    resultado.innerHTML=marcador(number_player1,number_player2);
});
