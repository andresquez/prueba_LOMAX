'''
Andres Quezada
Prueba LOMAX - Ejercicio 1
14/06/23
Realiza un programa el cual dadas 4 coordenadas sobre un plano
cartesiano (x,y), determine si las coordenadas forman un cuadrado.
'''

# import libraries
import math

#function to calculate the distance between two points
def calc_distance(p1, p2):
    return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)

#function to check if the points form a square
def check_square(p1, p2, p3, p4):
    distances = [
        calc_distance(p1, p2),
        calc_distance(p2, p3),
        calc_distance(p3, p4),
        calc_distance(p4, p1),
        calc_distance(p1, p3),
        calc_distance(p2, p4)
    ]
    distances.sort()

    if distances[0] == distances[1] == distances[2] == distances[3] and distances[4] == distances[5]:
        return True
    return False

# Testing
p1 = (0, 0)
p2 = (0, 5)
p3 = (5, 0)
p4 = (5, 5)

if __name__ == "__main__":
    if check_square(p1, p2, p3, p4):
        print("\nThe coordinates form a square.\n")
    else:
        print("\nThe coordinates do NOT form a square.\n")
        