import random

def compare_random(number):
    random_number = random.randint(1, 100)
    print(f"Random number generated: {random_number}")
    if number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {number}, Random number: {random_number}")

compare_random(50)