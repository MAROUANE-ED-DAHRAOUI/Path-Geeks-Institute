basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(basket)

#remove banana
basket.remove("Banana")
print(basket)

#remove blueberries
basket.remove("Blueberries")
print(basket)

#add kiwi to the end of the list, I use append 
basket.append("Kiwi")
print(basket)

#Add "Apples" to the beginning of the list. 
basket.insert(0, "Apples")
print(basket)

#Count how many times "Apples" appear in the list. 
Apples_count = basket.count("Apples")
print("Number of Apples: ", Apples_count)
print(basket)

#Empty the list
basket.clear()

#Print the final state of the list. 
print(basket)
