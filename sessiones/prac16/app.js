function Validar() {
    let nombre = document.getElementById("nombre2").value ;

    if (nombre =="" ) {
        alert("El nombre es obligatorio , ingreselo por favor....");
        return false;
    }
    return true ;

}
function mostrarGrande(src) {
    document.getElementById("grande").src = src;

}


