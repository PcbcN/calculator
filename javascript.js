const numeros = document.getElementsByClassName("numeros");
const teclas = document.getElementsByClassName("teclas");
const operar = document.getElementById("igual");
let display = "";
let pantalla = 0;


//Eventos
for (const item of numeros) {
  item.addEventListener("click", hacerClick);
};

function hacerClick(n){
  console.log(this.id);
  display = display.concat(this.id);
  pantalla = parseInt(display);
  document.getElementById("Pantalla").innerHTML = pantalla;
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