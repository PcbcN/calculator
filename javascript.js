const numeros = document.getElementsByClassName("numeros");
const teclas = document.getElementsByClassName("teclas");
const operar = document.getElementById("igual").addEventListener("click", pulsarIgual);
const borrar = document.getElementById("borrar").addEventListener("click", borrarPantalla);

let display = "";
let datos = 0;
let operacion = "";


//Eventos
for (const item of numeros) {
  item.addEventListener("click", picarNumero);
};

//Funciones calculadora
function picarNumero(n){
  console.log(this.id);
  display = display.concat(this.id);
  document.getElementById("Pantalla").innerHTML = display;
};

function borrarPantalla (n){
  document.getElementById("Pantalla").innerHTML = "";
  display = "";
};

function pulsarIgual(){
  datos = eval(display);
  document.getElementById("Pantalla").innerHTML = datos;
};



//Operaciones reservadas
function operate(o,a,b){
  o(a,b);
}

function add(a,b) {
  console.log(a + b);
};

function subtract(a,b) {
  console.log(a - b);
};



var test = "2 * 4";




/* Funciones auxiliares que se van llamando  
const add = function(a,b) {
    return a + b;
  };
  
  const subtract = function(a,b) {
      return a - b;
  };

  const sumar = function(arr) {
    let result = 0;
      for (const item of arr){
        result += item;
      }
      return result;
  
  };

  const multiplicar = function(arr) {
    let result = 1;
      for (const item of arr){
        result *= item;
      }
      return result;
  
  };

  const dividir = function(arr) {
    let result = 1;
      for (const item of arr){
        result /= item;
      }
      return result;
  
  };

*/