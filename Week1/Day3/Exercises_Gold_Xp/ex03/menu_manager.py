class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice_level": "B", "gluten_index": False},
            {"name": "Hamburger", "price": 15, "spice_level": "A", "gluten_index": True},
            {"name": "Salad", "price": 18, "spice_level": "A", "gluten_index": False},
            {"name": "French Fries", "price": 5, "spice_level": "C", "gluten_index": False},
            {"name": "Beef bourguignon", "price": 25, "spice_level": "B", "gluten_index": True}
        ]
    def add_item(self,name, price, spice, gluten):
        new_item = {
            "name": name,
            "price": price,
            "spice_level": spice,
            "gluten_index": gluten
        }
        self.menu.append(new_item)

    def update_item(self,name, price, spice, gluten):
        for item in self.menu:
            if item["name"] == name:
                item["price"] = price
                item["spice_level"] = spice
                item["gluten_index"] = gluten
                return
        print(f"Item '{name}' not found in the menu.")

    def remove_item(self,name):
        for item in self.menu:
            if item["name"] == name:
                self.menu.remove(item)
                return
        print(f"Item '{name}' not found in the menu.")

# def main():
    
#     manager = MenuManager()
    
#     print("Initial Menu:")
#     for item in manager.menu:
#         print(f"Name: {item['name']}, Price: {item['price']}, Spice Level: {item['spice_level']}, Gluten Index: {item['gluten_index']}")

#     print("\nAdding new item:")
#     manager.add_item("Pasta", 12, "A", True)
#     for item in manager.menu:
#         print(f"Name: {item['name']}, Price: {item['price']}, Spice Level: {item['spice_level']}, Gluten Index: {item['gluten_index']}")

#     print("\nUpdating item:")
#     manager.update_item("Soup", 11, "B", False)
#     for item in manager.menu:
#         print(f"Name: {item['name']}, Price: {item['price']}, Spice Level: {item['spice_level']}, Gluten Index: {item['gluten_index']}")

#     print("\nRemoving item:")
#     manager.remove_item("French Fries")
#     for item in manager.menu:
#         print(f"Name: {item['name']}, Price: {item['price']}, Spice Level: {item['spice_level']}, Gluten Index: {item['gluten_index']}")

# main()
