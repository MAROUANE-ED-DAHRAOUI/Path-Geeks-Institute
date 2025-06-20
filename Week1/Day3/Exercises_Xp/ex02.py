#Step 1: Create the Dog Class
class Dog:
    def __init__(self, name, height):
        self._name = name
        self._height = height

    def bark(self):
        print(f"{self._name} goes woof!")

    def jump(self):
        print(f"{self._name} jumps {self._height * 2} cm high!")


#Step 2: Create Dog Objects
davids_dog = Dog("Hawhaw", 50)
sarahs_dog = Dog("RexHaw", 60)


#Step 3: Print Dog Details and Call Methods
print(f"David_Dog is name: {davids_dog._name} and height: {davids_dog._height} cm tall")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah_Dog is name: {sarahs_dog._name} and height: {sarahs_dog._height} cm tall")
sarahs_dog.bark()
sarahs_dog.jump()


# Step 4: Compare Dog Sizes
if davids_dog._height > sarahs_dog._height:
        print(f"{davids_dog._name} is taller than {sarahs_dog._name}.")
elif davids_dog._height < sarahs_dog._height:
    print(f"{sarahs_dog._name} is taller than {davids_dog._name}.")
elif davids_dog._height == sarahs_dog._height:
    print(f"{davids_dog._name} and {sarahs_dog._name} are the same height.")
else:
    print("Something went wrong with the height comparison.")