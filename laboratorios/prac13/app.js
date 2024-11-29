// Parte 1
function Suma(a, b) {
  return a + b;
}

function Resta(a, b) {
  return a - b;
}

function Multiplicacion(a, b) {
  return a * b;
}

function Division(a, b) {
  if (b === 0) {
    return 'Error: División por cero';
  }
  return a / b;
}

// Parte 2
function calculadora(operacion) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Por favor, ingresa números válidos.";
  } else {
     if (operacion === 'Suma') {
      result = Suma(num1, num2);
    } else {
      if (operacion === 'Resta') {
        result = Resta(num1, num2);
      } else {
        if (operacion === 'Multiplicación') {
          result = Multiplicacion(num1, num2);
        } else {
          if (operacion === 'División') {
            result = Division(num1, num2);
          } else {
            result = "Operación no válida.";
          }
        }
      }
    }
  }

 document.getElementById("result").innerHTML= `<strong> RESULTADO </strong> <br> ${operacion} : ${result}`;
}
PAR