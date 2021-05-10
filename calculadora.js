//NIVEL 1

// Crea una funció anomenada calculadora que tingui com a entrada els següents
// paràmetres: operador, valor1 i valor2.
// Estructura de la funció que faci sumes, restes i multiplicacions. El resultat haurà de ser
// mostrar per pantalla.
console.log("hola");
function Calculadora(num1, num2, op) {
  let result;

  switch (op) {
    case "multiplicar":
      document.getElementById('resultado').innerHTML= num1 * num2;
      return console.log(`${num1} * ${num2} = ${result}`);

    case "dividir":
      if (num2 !== 0) {
        document.getElementById('resultado').innerHTML= num1 / num2;
        return console.log(`${num1} / ${num2} = ${result}`);
      } else {
        console.log("no se puede divir entre 0");
        return (result = 0);
      }

    case "sumar":
      document.getElementById('resultado').innerHTML= num1 + num2;
      return console.log(`${num1} + ${num2} = ${result}`);

    case "restar":
      document.getElementById('resultado').innerHTML= num1 - num2;
      return console.log(`${num1} - ${num2} = ${result}`);
  }
}

document.getElementById("button").addEventListener("click", getData);

function getData() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  op = document.getElementById("op").value;
  Calculadora(num1, num2, op);
}

//NIVEL 2

// Aprofita la funció "calculadora" de l'exercici anterior per crear una calculadora completa
// amb opcions per sumar, restar, multiplicar i dividir. Hauràs de controlar el Zero com a
// denominador d'una divisió, ja que si l'usuari divideix qualsevol número entre 0 donarà
// error (p.e. 3/0), has de garantir que no falli!

// NIVEL 3

// Ara evolucionarem el nivell 2: Crearem una interfície gràfica per tal de fer la calculadora
// més usable. El disseny és totalment lliure, intenta sorprendre al teu mentor.
