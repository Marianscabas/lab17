function verificarCalificacion() {

    let grado = parseInt(document.getElementById("grado").value);
    let mensaje = ""
    if (grado >= 90) {
        mensaje = "Aprobado con honores";
    } else if (grado >= 70 && grado < 90) {
        mensaje = "Aprobado";
    } else {
        mensaje = "Reprobado";
    }
    document.getElementById("gradoSalida").innerText = mensaje;
}

function determinarParidad() {
    let parinpar = parseInt(document.getElementById("parinpar").value);
    let mensaje = "";
    if (parinpar % 2 == 0) {
        mensaje = "el numero es par";
    } else {
        mensaje = "el numero es inpar"
    }
    document.getElementById("parinparSalida").innerText = mensaje;

}

function evaluarDescunto() {
    let descuento = parseInt(document.getElementById("descuento").value);
    let descuentoFinal = descuento;
    if (descuento > 100000) {
        descuentoFinal = descuento * 0.9;
    }
    document.getElementById("descuentoSalida").innerText = `valor a pagar ${descuentoFinal}`;

}
function jugarAdivinanza() {
    let adivinar = parseInt(document.getElementById("adivinar").value);
    let mensaje = "";
    let alateorio = Math.floor(Math.random() * 10) + 1;

    if (adivinar === alateorio) {
        mensaje = "¡Felicidades, adivinaste el número!";
    } else {
        mensaje = `Lo siento, el número era ${alateorio}`;
    }

    document.getElementById("adivinarSalida").innerText = mensaje;


}