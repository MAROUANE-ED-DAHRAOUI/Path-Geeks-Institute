class Dog:
    def __init__(self, name, age, weight):
        self._name = name
        self._age = age
        self._weight = weight

    def bark(self):
        return f"{self._name} is Barking HawHaw!"

    def run_speed(self):
        return self._weight / self._age * 2

    def fight(self, other_dog):
        my_power = self.run_speed() * self._weight
        other_power = other_dog.run_speed() * other_dog._weight
        
        if my_power > other_power:
            return f"{self._name} wins the fight!"
        elif my_power < other_power:
            return f"{other_dog._name} wins the fight!"
        else:
            return "It's a draw!"

# Step 2: Create dog instances
dog1 = Dog("kalb1", 5, 20)
dog2 = Dog("kalb2", 3, 15)

# Step 3: Test dog methods
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))