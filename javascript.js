const numeros = document.getElementsByClassName("numeros");
const teclas = document.getElementsByClassName("operacion");
const resultar = document.getElementById("igual").addEventListener("click", pulsarIgual);
const borrar = document.getElementById("borrar").addEventListener("click", clear);

let display = "";
let calculo = "";
let numero1;
let numero2;
let resultado;
let input = "";



//Eventos
for (const item of numeros) {
  item.addEventListener("click", picarNumero);
};

for (const item of teclas) {
  item.addEventListener("click", picarTecla);
};

document.addEventListener('keydown', (event) => {
  let valor = event.key;
  event.preventDefault();

  if (valor >= 0 && valor <= 9 || valor === "."){
    display = display.concat(valor);
    document.getElementById("Pantalla").innerHTML = display;
  } else if (valor === "+" || valor === "-" || valor === "*" || valor === "/"){
    if(!numero1) {numero1 = parseFloat(display)}
    else {numero2 = parseFloat(display)}
    switch (event.key) {
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
    } else if (valor === "Backspace"){
    clear();
    
    } else if (valor === "Enter"){
    pulsarIgual();
    }
}, false);


//Funciones operar

function sumar(a,b) {
  return a + b;
};

function restar(a,b) {
  return a - b;
};


function dividir(a,b) {
  if (b === 0){alert("Epa! Nada de dividir por cero!")}
  else {
  return a / b;
  }
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
  if(!numero1) {numero1 = parseFloat(display)}
  else {numero2 = parseFloat(display)}
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
  if(!numero1) {numero1 = parseFloat(display)}
  else {numero2 = parseFloat(display)}
  
  operate(o,numero1,numero2);
  document.getElementById("Pantalla").innerHTML = resultado;
  numero1 = resultado.toFixed(2);
};

