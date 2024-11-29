""" try:
    entero=int(input("ingrese numero entero:"))
    float_num=float(input("ingrese numero flotante: "))
    
    suma=entero+float_num
    div=entero/float_num
    resta=entero-float_num

    print(f"el resultado:{suma} ")
    print(f"el resultado:{div} ")
    print(f"el resultado:{resta} ")
    
except ValueError:
    print("debes escribir un numero")    
except ZeroDivisionError:
    print("no se puede divir por 0")

 """

""" frutas=["Pera","Manzana","Uva","Banano","Fresa"]
print(frutas)

frutas.append("pera")

print(frutas) """


""" libro={
    "autor":"mariaaa",
    "titulo" :"libro1",
    "fecha":10
}
print(libro)

libro["genero"]="fantacia"
print(libro)
print(libro["autor"])
 """
 
 
""" cojunto1={10,20,30,40}
cojunto2={40,50,60,70,80}

inter=cojunto1&cojunto2
union=cojunto1|cojunto2

print(inter, union ) """


""" numero_cadena="2024"
numero_cadena=int(numero_cadena)
print(numero_cadena + 5)
 """