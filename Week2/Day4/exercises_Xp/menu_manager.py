from menu_item import get_connection

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s", (name,))
                row = cur.fetchone()
                if row:
                    return {'name': row[0], 'price': row[1]}
                else:
                    return None

    @classmethod
    def all_items(cls):
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT item_name, item_price FROM Menu_Items")
                return cur.fetchall()

# if __name__ == '__main__':
    # item = MenuManager.get_by_name('sandwish')
    # if item:
    #     print(f"Item found: {item['name']} - Price: {item['price']}")
    # else:
    #     print("Item not found.")

    # all_items = MenuManager.all_items()
    # print("All menu items:")
    # for name, price in all_items:
    #     print(f"{name} - Price: {price}")
