input_user = int(input("Enter a month from 1 to 12: "))

if input_user >= 3 and input_user <= 5:
    print("spring")
elif input_user >= 6 and input_user <= 8:
    print("summer")
elif input_user >= 9 and input_user <= 11:
    print("Autumn")
elif input_user == 12 or input_user == 1 or input_user == 2:
    print("winter")
else:
    print("Invalid month. Please enter a number between 1 and 12.")