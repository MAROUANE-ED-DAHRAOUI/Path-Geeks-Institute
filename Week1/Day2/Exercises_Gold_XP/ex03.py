names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

name = input("Please enter a name: ")
for i in range(len(names)):
    if names[i] == name:
        print(f"The index of {name} is {i + 1}.")
        break
else:
    print("Your name is not in the list.")