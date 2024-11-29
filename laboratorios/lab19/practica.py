#ejercisio1
""" n=int(input("ingese numero...."))

if n %2 == 0 :
    print("el numero ingresado es par")
else:
    print("el numero ingresado no es par ") """


#ejercisio2
""" n=int(input("ingresa un numero positivo de 1, 2 o 3 cifras"))

if n > 0 and n <=9 :
    print("el numero tiene 1 cifra")
elif  n>=10 and n<=99:
    print("el numero es de 2 cifras")
elif n>=100 and n <=999:
     print("el numero es de 3 cifras")
 """

#ejercisio3

""" n=int(input("Cuantos empleados tiene la empresa:"))
x=1
conta1=0
conta2=0
i=0

while (x <= n):
    x+=1
    salario=float(input("salarios: " ))
    if salario >=1000000  and salario <= 3000000:
        conta1=conta1+1
    elif salario > 3000000 and salario <= 5000000:
        conta2=conta2+1
    else:
        print("el salario no es valido")
    
    i=i+salario

print(f"{conta1} empleados ganan entre 1 y 3 millones")
print(f"{conta2} empleados ganan mas de  3 millones")
print(f"la empresa gasta {i} millones")
 """

#ejercisio4
cant1=0
cant2=0
cant3=0
cant4=0
n=int(input("Cantidad de puntos:"))
for f in range(n):
    x=int(input("Ingrese coordenada x:"))
    y=int(input("Ingrese coordenada y:"))
    if x >=0 and y >=0:
        print("va al cuadrante 1")
    elif  x < 0 and y >= 0:
        print("va al cuadrante 2")  
    elif x < 0 and y < 0:
        print("va al cuadrante 3")   
    elif x >=0  and y<0:
        print("el cuadrate va al 4")    
    
    
 


