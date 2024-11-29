#escritura de listas en archivo

lista=["lista 1","lista 2","lista 3","lista 4"]

with open('prac5.txt', 'w') as archivo:
    for linea in lista :
        archivo.write(f"esta es una linea  {linea}\n")
        
print("lista sin problemas")