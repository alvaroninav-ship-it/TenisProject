function sumar(a) {
  if (a<30) {
    a+=15;
  }
  else if(30<=a){
    a+=10;
  }
  return a;
}

export default sumar;
