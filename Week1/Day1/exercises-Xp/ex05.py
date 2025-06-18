my_fav_numbers = set([10, 20, 30, 40])
#Add element's from use function add
my_fav_numbers.add(50)
my_fav_numbers.add(90)
print(my_fav_numbers)

# Removes 90 from the set I can use func remove
my_fav_numbers.remove(90)
print(my_fav_numbers)

friend_fav_numbers = set([60, 70, 80, 90])
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)
