class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

Cat1 = Cat("I'am1", 3)
Cat2 = Cat("I'am2", 5)
Cat3 = Cat("I'am3", 2)


def find_oldest_cat(cat1, cat2, cat3):
    if cat1.age >= cat2.age and cat1.age >= cat3.age:
        return cat1.name
    elif cat2.age >= cat1.age and cat2.age >= cat3.age:
        return cat2.name
    else:
        return cat3.name

print(f"The oldest cat is: {find_oldest_cat(Cat1, Cat2, Cat3)}")
