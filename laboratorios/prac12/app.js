function sumarNumeros() {
    const vector = document.getElementById("promedio").value;
    const numeros = vector.split(",").map(num => parseFloat(num.trim()))
    let i = 0;
    let suma = 0;
    divicion = 0;

    for (i; i <= numeros.length; i++) {
        if (!isNaN(numeros[i])) {
            suma = suma + numeros[i];
        }
    }

    divicion = suma / numeros.length;
    document.getElementById("salidaPromedio").innerText = `  la suma es :${suma} el promedio es : ${divicion}`;
}


function ingresarNumeros() {

    let numero = parseInt(prompt("ingrese numero"))
    let i = 0;
    let suma = 0;

    while (numero >= 0) {
        i++;
        suma = suma + numero;
        numero = parseInt(prompt("ingrese numero"))
    }

    document.getElementById("salidaNumeros").innerText = ` la suma es : ${suma} numero negativo ${numero}`;

}
function validarContrasena() {
    let contrasena = "";
    let correcta = "holaa";
    let contador = 0;

    do {
        contrasena = prompt("ingrese contraseña");
        contador++;

    } while(contrasena != correcta);

    document.getElementById("salidaContrasena").innerText = `contraseña correcta ${correcta} numero de intentos ${contador}`;


}