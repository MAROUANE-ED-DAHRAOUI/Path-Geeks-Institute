birthdays = {
    "marouane" : "1999/08/23",
    "mohammed" : "1999/09/24",
    "yassine" : "1999/10/25",
    "youssef" : "1999/11/26",
    "simo" : "1999/12/27"
}

print(f"this is all names in the dictionary: {', '.join(birthdays.keys())}\n")

name = input("Enter the name of the person whose birthday you want to look up: ").lower()
if name in birthdays:
    print(f"\n{name.capitalize()} birthday is {birthdays[name]}.\n")
else:
    print(f"\nSorry, we don’t have the birthday information for {name.capitalize()}.\n")

