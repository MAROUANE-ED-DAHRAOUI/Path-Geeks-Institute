def get_full_name(first_name, last_name):
    name = input("please enter your first name: ")
    name += " " + input("please enter your last name: ")
    return name

def main():
    full_name = get_full_name("", "")
    print(f"full name is: {full_name}")

main()
