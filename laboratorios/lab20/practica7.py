#programa que muestre el mayor de 3 numeros

def mayor (v1,v2,v3):
    print("el mayor valor de los 3 numeros es: ")
    if v1<v2 and v1<v3:
        print(v1)
    elif v2>v1 and v2>v3:
        print(v2)
    else: 
        print(v3)
        
def cargar_datos():
 x=int(input("ingresa el primer valor: "))  
 y=int(input("ingresa el segundo valor:  "))
 z=int(input("ingresa el tercer valor: "))
 
 mayor(x,y,z)
 
 
cargar_datos()
   