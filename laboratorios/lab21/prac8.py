#manejo de exepciones ( erros para no remper)

try:
    with open('no_hay_texto.txt', 'r') as fichero:
        conntenido= fichero.read()
        print(conntenido)
        
except FileNotFoundError:
    print("archivo no encontrado")
except IOError:
    print("erros de lectura")        
        