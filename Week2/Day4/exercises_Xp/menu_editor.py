from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n--- Menu Editor ---")
        choice = input("Choose: (V)view, (A)add, (D)delete, (U)update, (S)show all, (E)exit: ").upper()

        if choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'V':
            name = input("Enter item name: ")
            item = MenuManager.get_by_name(name)
            print(item if item else "Item not found.")
        elif choice == 'E':
            show_restaurant_menu()
            print("Exiting...")
            break
        else:
            print("Invalid choice.")

def add_item_to_menu():
    name = input("Item name: ")
    price = int(input("Item price: "))
    item = MenuItem(name, price)
    item.save()

def remove_item_from_menu():
    name = input("Item to delete: ")
    item = MenuItem(name, 0)
    item.delete()

def update_item_from_menu():
    name = input("Current item name: ")
    new_name = input("New name: ")
    new_price = int(input("New price: "))
    item = MenuItem(name, 0)
    item.update(new_name, new_price)

def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\n--- Restaurant Menu ---")
    for item in items:
        print(f"{item[0]} - ${item[1]}")

if __name__ == '__main__':
    show_user_menu()
