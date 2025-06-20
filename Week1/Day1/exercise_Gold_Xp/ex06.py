import random

user_num = int(input("Input a number from 1 to 9 (including): "))
random_num = random.randint(1, 9)

if user_num == random_num:
    print("Winner")
else:
    print("Better luck next time.")