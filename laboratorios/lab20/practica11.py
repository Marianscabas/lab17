def descuento(precio,desc=10):
    desc=desc/100
    rebaja=precio-(desc*precio)
    
    return rebaja
    
costo=int(input("precio del producto:"))
rebaja=input("descuento que desea aplicar:")
if rebaja == "":
    print(f"el valor a pagar es: {descuento(costo)}")
else:
    rebaja=int(rebaja)
    print(f"el valor a pagar es: {descuento(costo,rebaja)}")
