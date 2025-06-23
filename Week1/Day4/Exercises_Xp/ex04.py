class Person:
    def __init__(self, first_name, age, last_name=""):
        self._first_name = first_name
        self._last_name = last_name
        self._age = age

    def is_18(self):
        return self._age >= 18 #by default if age >= 18 return true

class Family:
    def __init__(self, last_name):
        self._last_name = last_name
        self.members = []   #A members list that will store Person objects

    def born(self, first_name, age):
        new_person = Person(first_name, age, self._last_name)
        self.members.append(new_person)
        return new_person

    def check_majority(self, first_name):
        for member in self.members:
            if member._first_name == first_name:
                if member.is_18():
                    print(f"{first_name} You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print(f"{first_name} Sorry, you are not allowed to go out with your friends.")
                return
        print(f"{first_name} is not in the family.")
    
    def family_presentation(self):
        print(f"Last Name : {self._last_name}")
        for member in self.members:
            print(f"First Name : {member._first_name} Age : {member._age}")


def main():
    family = Family("ed-dahraoui")
    family.born("marouane", 10)
    family.born("yassine", 20)
    family.family_presentation()
    family.check_majority("marouane")
    family.check_majority("yassine")
    family.check_majority("khalid")

main()
