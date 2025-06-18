User_input = input("pleas enter a string : ")

result = User_input[0]
#  [1:] means start from the second character and go to the end of the string.
for char in User_input[1:]:
    if char != result[-1]:
        result += char

print(result)