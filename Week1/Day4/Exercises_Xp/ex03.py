from ex02 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [self._name]
        for dog in args:
            names.append(dog._name)
        print(f"{', '.join(names)} are playing together!")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self._name} {random.choice(tricks)}")

# Test PetDog methods
my_dog = PetDog("Fido", 2, 10)
buddy = PetDog("Buddy", 3, 12)
max_dog = PetDog("Max", 4, 14)

my_dog.train()
my_dog.play(buddy, max_dog)
my_dog.do_a_trick()

#this test Not working because play method expects dog instances not strings
# my_dog = PetDog("Fido", 2, 10)
# my_dog.train()
# my_dog.play("Buddy", "Max")
# my_dog.do_a_trick()