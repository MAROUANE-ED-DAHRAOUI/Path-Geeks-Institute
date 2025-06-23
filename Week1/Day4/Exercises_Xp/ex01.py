class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

#Step 2: Create a list of cat instances
all_cats = [
    Bengal('Bengal', 3),
    Chartreux('Chartreux', 2),
    Siamese('Siamese', 4)
]

#Step 3: Create a Pets instance of the list of cat instances
sara_pets = Pets(all_cats)

#Step 4: Take cats for a walk
sara_pets.walk()


# def main():

#     for cat in all_cats:
#         print(cat.sing('Meow!'))

# main()