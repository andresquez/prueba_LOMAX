'''
Andres Quezada
Prueba LOMAX - Ejercicio 2
14/06/23
Realiza un programa el cual dibuje un pino en consola dada una altura para el
árbol. Usar la imagen de referencia. En la imágen el árbol tiene altura 10.
'''

def draw_pine_tree(height):
    for i in range(1, height+1):
        print(f"{' ' * (height - i)}{'* ' * i }\n")

        
    print(f"{' ' * (height - 1)}*\n{' ' * (height - 1)}*")
          

if __name__ == "__main__":
    draw_pine_tree(10)
