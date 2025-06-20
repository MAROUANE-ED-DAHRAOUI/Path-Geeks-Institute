names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")
if user_name in names:
    print(f"The index of the first occurrence of {user_name} is {names.index(user_name)}")
else:
    print("Your name is not in the list.")