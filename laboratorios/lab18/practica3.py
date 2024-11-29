n=int(input("cuantas personas quieres procesar"))
menores=0
mayores=0
total_edades=0
i=0

while i < n :
    edad=int(input("digita edades"))
    if edad<18:
        menores+=1
    else: 
        mayores+=1
    
    i+=1
    total_edades=total_edades + edad

print("menores" ,menores ,"mayores" , mayores,"totaledades", total_edades)


