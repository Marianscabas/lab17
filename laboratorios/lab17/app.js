function alerta(params) {
    alert("Bienvedido a mi pagina web estatica")
}

function validarFormulario() {
    let nombre = document.getElementById("nombre").value ;
    let email = document.getElementById("email").value ;
    

    if (nombre=="" || email==""  ) {
        alert("todos los campos son obligatorio")
        return false
    }else{
        alert("formulario enviado correctamente")
    }
    return true
}