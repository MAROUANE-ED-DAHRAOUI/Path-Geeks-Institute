toppings = []
while True:
    topping = input("Enter a pizza topping (or type 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_cost = 10 + 2.5 * len(toppings)
print("\nYour pizza toppings:", ", ".join(toppings))
print(f"Total cost: ${total_cost:.2f}")