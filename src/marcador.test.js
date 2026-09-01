import marcador from "./marcador";
import sumar from "./sumador";
describe("Mostrar marcador", () => {
  it("deberia mostrar el marcador correcto", () => {
    expect(marcador(0, 0)).toEqual("Love-Love");
  });
  it("deberia mostrar cambio cuando uno anote", () => {
    expect(marcador(15, 0)).toEqual("15-Love");
  });
  it("deberia mostrar cambio cuando el segundo anote", () => {
    expect(marcador(0, 15)).toEqual("Love-15");
  });
  it("deberia mostrar cambio se llegue a 40 alguno", () => {
    expect(marcador(0, 40)).toEqual("Love-40");
  });
  it("deberia mostrar cambio cuando haya anotaciones", () => {
    expect(marcador(40, 15)).toEqual("40-15");
  });
  it("deberia mostrar deuce cuando haya empate en 40-40", () => {
    expect(marcador(40, 40)).toEqual("Deuce");
  });
  it("deberia mostrar advantage cuando un jugador tenga ventaja", () => {
    expect(marcador(50, 40)).toEqual("Advantage Player 1");
  });
  it("deberia mostrar advantage cuando un jugador tenga ventaja", () => {
    expect(marcador(40, 50)).toEqual("Advantage Player 2");
  });
  it("deberia mostrar game para el jugador que gane cuando haya empate en 40-40", () => {
    expect(marcador(60, 40)).toEqual("Game for Player 1");
  });
   it("deberia mostrar game para el jugador que gane cuando haya empate en 40-40", () => {
    expect(marcador(30, 50)).toEqual("Game for Player 2");
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
