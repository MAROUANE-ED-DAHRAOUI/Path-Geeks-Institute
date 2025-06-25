class Circle:
    # create a circle by giving either the radius or diameter
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            self.radius = 0
            self.diameter = 0

    # calculate area of a circle
    def area(self):
        return 3.14 * self.radius * self.radius

    # When you print the circle, show radius and diameter
    def __str__(self):
        return "Circle with radius = " + str(self.radius) + " and diameter = " + str(self.diameter)

    # Add two circles: make a new one with combined radius
    def __add__(self, other):
        new_radius = self.radius + other.radius
        return Circle(radius=new_radius)

    # Is this circle bigger than the other?
    def __gt__(self, other):
        return self.radius > other.radius

    # Are the circles equal (same radius)?
    def __eq__(self, other):
        return self.radius == other.radius

    # Is this circle smaller than the other? (for sorting)
    def __lt__(self, other):
        return self.radius < other.radius

def main():
    c1 = Circle(radius=3)
    c2 = Circle(diameter=8)
    print(c1)
    print(c2)
    print("Area of c1:", c1.area())
    c3 = c1 + c2
    print("c3 (c1 + c2):", c3)
    print("c1 > c2?", c1 > c2)
    print("c1 == c2?", c1 == c2)
    circles = [c2, c1, c3]
    circles.sort()
    print("Sorted circles:", [str(c) for c in circles])

main()