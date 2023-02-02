const numeros = document.getElementsByClassName("numeros");
const teclas = document.getElementsByClassName("teclas");
const operar = document.getElementById("igual");

//Eventos
for (let item of numeros) {
  item.addEventListener("click", function clickear(){
    console.log(item.id);
  })
}

for (let item of teclas) {
  item.addEventListener("click", function clickear(){
    console.log(item.id);
  })
}




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