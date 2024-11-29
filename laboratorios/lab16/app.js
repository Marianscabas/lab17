function validarFormulario() {
    let nombre = document.getElementById("nombre").value ;
    let email = document.getElementById("email").value ;
    let contrasena = document.getElementById("contrasena").value ;

    if (nombre=="" || email=="" || contrasena=="" ) {
        alert("todos los campos son obligatorio")
        return false
    }
    return true
}

function mostrar_imagen(event) {
    let imagen = document.getElementById("div_mostrar");
    imagen.src=URL.createObjectURL(event.target.files[0]);
}
