function mostrarValores() {
    let nombre = "marian";
    let edad = 19;
    let esEstudiante = true 

    document.write("Nombre : " , nombre, "<br>" )
    document.write("Edad :" , edad, "<br>")
    document.write("Es estudiante : " , esEstudiante,"<br>")


    nombre = "carlos";
    edad= 25;
    esEstudiante = false

    document.write("Nombre : " , nombre, "<br>" )
    document.write("Edad :" , edad, "<br>")
    document.write("Es estudiante : " , esEstudiante,"<br>")


}

function mostrarOperacione() {
    let a = 10;
    let b = 20;
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a/b;
    let comparacionIgual = a == b;
    let distinto = a != b;
    let mayorque = a > b;
    let menorque = b < a;
    let mayorIgual = a >= b;
    let menorIgual = b <= a ;

    document.write("suma : " , suma, "<br>" )
    document.write("resta : " , resta, "<br>" )
    document.write("multiplicacion : " , multiplicacion, "<br>" )
    document.write("division : " ,division, "<br>" )
    document.write("comparacionIgual : " , comparacionIgual, "<br>" )
    document.write("distinto : " , distinto, "<br>" )
    document.write("mayorque : " , mayorque ,"<br>" )
    document.write("menorque : " , menorque, "<br>" )
    document.write("mayorIgual : " , mayorIgual, "<br>" )
    document.write("menorIgual: " , menorIgual, "<br>" )

}

function mostrarResultados(){
 let esMayorDeEdad = true;
 let tieneLicencia = false;

 let puedes = esMayorDeEdad && tieneLicencia;
 let  noPuedes  = esMayorDeEdad || tieneLicencia;

 document.write("puedes conducir :", puedes , "<br>")
 document.write( "no puedes conducir :" , noPuedes)
}

