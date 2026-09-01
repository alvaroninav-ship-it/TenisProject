function marcador(a,b) {
  let resultado="";
  let jugador1="";
  let jugador2="";
  if (a==0){
    jugador1="Love";
  }
  if (b==0){
    jugador2="Love";
  }
  if (a==15){
    jugador1="15";
  }
  if (b==15){
    jugador2="15";
  }
  resultado=jugador1+"-"+jugador2;
  return resultado;
}
export default marcador;