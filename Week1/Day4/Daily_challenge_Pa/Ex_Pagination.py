import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        if items is None:
            self.items = []
        else:
            self.items = items
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]
    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page number out of range.")
        else:
            self.current_idx = page_num - 1
    def first_page(self):
        self.current_idx = 0
        return self
    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self
    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self
    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self
    def __str__(self):
        return "\n".join(self.get_visible_items())

def main():
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)
    print(str(p))

    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)

    print(p.get_visible_items())
    # ['a', 'b', 'c', 'd']

    p.next_page()
    print(p.get_visible_items())
    # ['e', 'f', 'g', 'h']

    p.last_page()
    print(p.get_visible_items())
    # ['y', 'z']

    # Handle invalid page numbers with try-except
    try:
        p.go_to_page(10)
        print(p.current_idx + 1)
    except ValueError as e:
        print("Error:", e)
    # Output: Error: Page number out of range.

    try:
        p.go_to_page(0)
    except ValueError as e:
        print("Error:", e)
    # Output: Error: Page number out of range.

main()
