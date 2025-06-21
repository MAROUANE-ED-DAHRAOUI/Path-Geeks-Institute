class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    # calculates the circumference of the circle, "I use it this formula: 2 * π * radius"
    def perimeter(self):
        return 2 * 3.14 * self.radius

    # calculates the area inside the circle, "I use it this formula: π * radius^2"
    def area(self):
        return 3.14 * self.radius * self.radius

    # simple definition of a circle
    def definition(self):
        print("A circle is a round shape with one center :-)")


# Example test cases :

# def main():
#     c1 = Circle(3)
#     c2 = Circle(4)
#     print("Perimeter of c1:", c1.perimeter())
#     print("Area of c1:", c1.area())
#     c1.definition()
    
#     print("\nPerimeter of c2:", c2.perimeter())
#     print("Area of c2:", c2.area())
#     c2.definition()

# main()

