import psycopg2

def get_connection():
    return psycopg2.connect(
        dbname="management_system_for_Amanager",
        user="postgres",
        password="root",
        host="localhost",
        port="5432"
    )

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price))
                print(f"Item '{self.name}' added successfully.")

    def delete(self):
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
                print(f"Item '{self.name}' deleted successfully.")

    def update(self, new_name, new_price):
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
                            (new_name, new_price, self.name))
                print(f"Item '{self.name}' updated to '{new_name}' with price {new_price}.")

# if __name__ == '__main__':
    # Create a new menu item
    # item = MenuItem('sandwish', 35)
    # item.save()  # Should insert into the table

    # # Update the item
    # item.update('sandwish', 400)  # Should update the name and price

    # Delete the item
    # item = MenuItem('tortiya', 400)
    # item.delete()  # Should delete it from the table
