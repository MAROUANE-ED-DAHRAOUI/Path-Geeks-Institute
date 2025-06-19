brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": "7000",
    "major_color": {
        "France": "blue",
        "Spain": "red"
    },
    "US": ["pink", "green"]
}

brand["number_stores"] = 2


print(f"Zara's clients are: {', '.join(brand['type_of_clothes'])}.")


brand["country_creation"] = "Spain"
print("\nafter adding country_creation:", brand)


if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
print("\ninternational competitors:", brand["international_competitors"])


if "creation_date" in brand:
    del brand["creation_date"]
print("\nafter deletion:", brand)


print("\nLast international competitor:", brand["international_competitors"][-1])


print("\nMajor colors in the US:", ", ".join(brand["US"]))


print("\nNumber of keys in the brand:", len(brand))


print("\nAll keys in the brand:", list(brand.keys()))
