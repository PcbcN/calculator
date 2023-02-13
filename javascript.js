const numeros = document.getElementsByClassName("numeros");
const teclas = document.getElementsByClassName("operacion");
const resultar = document.getElementById("igual").addEventListener("click", pulsarIgual);
const borrar = document.getElementById("borrar").addEventListener("click", clear);

let display = "";
let calculo = "";
let numero1 = 0;
let numero2 = 0;
let resultado = 0;


//Eventos
for (const item of numeros) {
  item.addEventListener("click", picarNumero);
};

for (const item of teclas) {
  item.addEventListener("click", picarTecla);
};

//Funciones operar

function sumar(a,b) {
  return a + b;
};

function restar(a,b) {
  return a - b;
};


function dividir(a,b) {
  return a / b;
};


function multiplicar(a,b) {
  return a * b;
};

function operate (o,a,b){
  resultado = o(a,b);
}


//Funciones calculadora

function picarNumero(n){
  display = display.concat(this.id);
  document.getElementById("Pantalla").innerHTML = display;

};

function picarTecla(n){
  if(numero1 === 0) {numero1 = Number(display)}
  else {numero2 = Number(display)}
  switch (this.id) {
      case "+":
        o = sumar;
        borrarPantalla();
        break;

      case "-":
        o = restar;
        borrarPantalla();
        break;

      case "*":
        o = multiplicar;
        borrarPantalla();
        break;

      case "/":
        o = dividir;
        borrarPantalla();
        break;
    
      default:
        alert ("Oooops");
        break;
  }
};

function borrarPantalla (){
  document.getElementById("Pantalla").innerHTML = "";
  display = "";
};

function clear(){
  document.getElementById("Pantalla").innerHTML = "";
  display = "";
  resultado = 0;
  numero1 = 0;
  numero2 = 0;

}

function pulsarIgual(){
  if(numero1 === 0) {numero1 = Number(display)}
  else {numero2 = Number(display)}

  operate(o,numero1,numero2);
  document.getElementById("Pantalla").innerHTML = resultado;
  numero1 = resultado;
};




