car_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
types = car_string.split(", ")

print(f"\nThere are {len(types)} manufacturers/companies in the list:\n{types}\n")

#first colon : means starting from the end of the list
#second colon : means going backwards by one step
print(f"list of manufacturers in reverse/descending order (Z-A):\n {types[::-1]}\n")

count = 0
for i in range(len(types)):
    if "o" in types[i].lower():
        count += 1
    else:
        continue

print(f"manufacturers’ names have the letter o in them, There are {count}\n")

count = 0
for i in range(len(types)):
    if "i" not in types[i].lower():
        count += 1
    else:
        continue

print(f"manufacturers’ names do not have the letter i in them, There are {count}\n")