class Zoo:
    def __init__(self, zoo_name):
        self._zoo_name = zoo_name
        self._animals = []

    def add_animal(self, new_animal):
        if new_animal not in self._animals:
            self._animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self._animals:
            print(animal)
    
    def sell_animal(self, animal_sold):
        if animal_sold in self._animals:
            self._animals.remove(animal_sold)
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        sorted_animals = sorted(self._animals)
        grouped = {}
        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped:
                grouped[first_letter] = []
            grouped[first_letter].append(animal)
        return grouped

    def get_groups(self):
        groups = self.sort_animals()
        for letter, animals in groups.items():
            print(f"{letter}: {animals}")



# the best exemple on all cases, "I use tools like "copilot & python Tutor--> I know steps my program what's doing " in order help me when I don't understand something "vibe coding" :-)

# zoo = Zoo("My Zoo")
# zoo.add_animal("Lion")
# zoo.add_animal("Tiger")
# zoo.add_animal("Elephant")
# zoo.add_animal("Giraffe")
# zoo.add_animal("Doog")
# zoo.add_animal("Zebra")
# zoo.add_animal("Bater")
# zoo.add_animal("Monkey")
# zoo.add_animal("Bear")
# zoo.add_animal("Monk")
# zoo.add_animal("Bat")
# zoo.add_animal("Dog")

# zoo.get_animals()
# zoo.sell_animal("Lion")
# zoo.get_animals()
# zoo.get_groups()
