import math
def area_circulo (radio):
    area= round(math.pi*radio**2,2)
    return area


n=int(input("ingese el radio: "))
print(f"el area del circulo cuyo radio es: {n} es: {area_circulo(n)}")
