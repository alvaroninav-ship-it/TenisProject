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
  if (a>0 && a<=40){
    jugador1=a;
  }
  if (b>0 && b<=40){
    jugador2=b;
  }
  if (a==40 && b==40){
    resultado="Deuce";
  }
  else{
    resultado=jugador1+"-"+jugador2;
  }
  return resultado;
}
export default marcador;