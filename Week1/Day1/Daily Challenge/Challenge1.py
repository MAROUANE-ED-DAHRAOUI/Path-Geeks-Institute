number = (int)(input("pleas enter a number positive : "))
lenght = (int)(input("pleas enter a number of lenght :"))

current_val = []
for i in range(1, lenght + 1) :
    current_val.append(number * i)

print(current_val)