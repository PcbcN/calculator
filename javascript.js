const numeros = document.getElementsByClassName("numeros");
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

function borrarPantalla (){
  document.getElementById("Pantalla").innerHTML = "";
  display = "";
};

function pulsarIgual(){
  datos = eval(display); //Nooooooooo
  document.getElementById("Pantalla").innerHTML = datos;
};





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

  function operate(o,a,b){
  o(a,b);
}

function add(a,b) {
  console.log(a + b);
};

function subtract(a,b) {
  console.log(a - b);
};

*/