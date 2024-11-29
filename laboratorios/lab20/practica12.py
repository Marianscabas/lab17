def mayor(*args):
    may=0
    for j in args:
     if may<j:
           may=j
    print(f"el mayor es {may}")
           
mayor(100,10,20,50)

           
  