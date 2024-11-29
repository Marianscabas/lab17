with open('prac1.txt','r') as archivo:
    contenido= archivo.read()
    
contenido=contenido+"\n esta es nueva linea"

with open('prac1.txt','w') as archivo:
    archivo.write(contenido)
    
print("terminado")    