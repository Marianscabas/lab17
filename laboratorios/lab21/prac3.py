# lectura linea por linea 
import time
with open('prac3.txt', 'r') as archivo:
    for linea in archivo:
        print(linea.strip())
        time.sleep(0.05)
        
        
print("lectura linea por linea completada")        