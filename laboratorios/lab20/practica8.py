#funcion que recibe una lista de numero y suma todos los numeros devolviendo el valor de la suma

def suma(lista):
    x=0
    for i in lista:
        x= x+i
        
    return x


def mayor(lista):
    may=0
    for j in range(len(lista)):
        if may<lista[j]:
           may=lista[j]
           
    print(f"el valor mayor es : {may}")
        
    
    
    
lista1=[5,10,20,5]
resultado=suma(lista1)
print(f" la suma de la lista es: {resultado} el mayor de la lista es :{mayor(lista1)}")
