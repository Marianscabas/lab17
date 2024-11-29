# apertura de archivo modo letura 

with open('prac1.txt', 'r') as archivo:
    var= archivo.read()
    
print(f"este es el contenido del archivo: {var}")    