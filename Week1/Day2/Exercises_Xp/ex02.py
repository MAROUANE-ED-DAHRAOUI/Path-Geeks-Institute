family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

Total_cost = 0
for name, age in family.items():
    if age < 3:
        pricing = 0
    elif 3 <= age <= 12:
        pricing = 10
    else:
        pricing = 15
    print(f"{name} ticket: ${pricing}")
    Total_cost += pricing

print(f"Total cost : {Total_cost}")

