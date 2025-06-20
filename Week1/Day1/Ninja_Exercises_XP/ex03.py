paragh = "Object-Oriented Programming (OOP) in Python is a programming paradigm based on the concept of \"objects\", which are instances of classes. A class defines the blueprint or structure for creating objects, encapsulating data (attributes) and behavior (methods) together. OOP allows developers to model real-world entities more naturally and organize code into reusable, modular, and maintainable components. Python supports key OOP principles such as encapsulation (hiding internal state), inheritance (reusing code from a parent class), polymorphism (using the same interface for different data types), and abstraction (hiding complex logic behind simple interfaces). This makes Python OOP powerful for building complex software systems like web applications, games, or GUIs, by promoting cleaner code architecture and easier debugging."

# Count characters
num_characters = len(paragh)

# Count sentences it contains
num_sentences = paragh.count('.') + paragh.count('!') + paragh.count('?')

# Count words (split by spaces)
words = paragh.split()
num_words = len(words)

# Count unique words
clean_words = [word.strip('.,!?"()').lower() for word in words]
unique_words = set(clean_words)
num_unique_words = len(unique_words)

# Print results
print(f"The paragraph contains {num_characters} characters.")
print(f"It contains {num_sentences} sentences.")
print(f"It contains {num_words} words.")
print(f"It contains {num_unique_words} unique words.")
