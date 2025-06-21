class MyList:
    def __init__(self, *args):
        self.letters = list(args)

    def reverse_list(self):
        self.letters.reverse()
        return self.letters
    def sorted_list(self):
        self.letters.sort()
        return self.letters

# Example test cases :

# def main():
#     my_list = MyList('a', 'b', 'c', 'd', 'e')
#     print("Original list:", my_list.letters)
    
#     reversed_list = my_list.reverse_list()
#     print("Reversed list:", reversed_list)
    
#     sorted_list = my_list.sorted_list()
#     print("Sorted list:", sorted_list)

# main()