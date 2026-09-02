import sumar from "./sumador";
import marcador from "./marcador";
import verificador from "./verificador";
const resultado = document.querySelector("#resultado-div");
const button_player1= document.querySelector("#primer-jugador-anota");
const button_player2= document.querySelector("#segundo-jugador-anota");
let number_player1=0;
let number_player2=0;
button_player1.addEventListener("click", () => {
    number_player1=sumar(number_player1);
    if (verificador(number_player1,number_player2)){
        number_player1=40;
        number_player2=40;
    }
    resultado.innerHTML=marcador(number_player1,number_player2);

});
button_player2.addEventListener("click", () => {
    number_player2=sumar(number_player2);
    if (verificador(number_player1,number_player2)){
        number_player1=40;
        number_player2=40;
    }
    resultado.innerHTML=marcador(number_player1,number_player2);
});
