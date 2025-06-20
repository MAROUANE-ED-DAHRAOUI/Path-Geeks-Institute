import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    count = 1
    first_throw = throw_dice()
    second_throw = throw_dice()
    while first_throw != second_throw:
        first_throw = throw_dice()
        second_throw = throw_dice()
        count += 1
    return count

def main():
    total_throws = 0
    for i in range(100):
        total_throws += throw_until_doubles()

    average_throws = total_throws / 100
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws:.2f}")

main()
