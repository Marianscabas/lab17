# arbrir archivo en modo binario

with open('download.png','rb') as archivo:
    var_cual=archivo.read()
    
    
with open('copialogo.png', 'wb') as copiaarchivo:
     copiaarchivo.write(var_cual)
     
print("listo")