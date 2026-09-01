import marcador from "./marcador";
import sumar from "./sumador";
describe("Mostrar marcador", () => {
  it("deberia mostrar el marcador correcto", () => {
    expect(marcador(0, 0)).toEqual("Love-Love");
  });
});

/*
Escenario
Expected Output
Empieza el set
Love-Love
Cualquiera que anote +=15
15-Love
15-15
Depues de un 30 +=10 para 40
40-30
Empate entre jugadores en 40-40
Deuce
Un jugador anota despues del deuce
Advantage Player #
Un jugador anota despues del advantage
Game for Player #
*/ 
