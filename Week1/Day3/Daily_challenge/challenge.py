class Farm:
    def __init__(self, farm_name):
        self.farm_name = farm_name
        self.animals = {}
    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count
    def get_info(self):
        info = [f"Farm Name: {self.farm_name}'s Farm"]
        for animal, count in self.animals.items():
            info.append(f"{animal} : {count}")
        return "\n".join(info)

# Test the code 
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
