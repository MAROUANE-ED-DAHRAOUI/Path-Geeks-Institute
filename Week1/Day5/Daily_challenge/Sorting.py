words = input("Enter comma-separated words: ")

sorted_words = ",".join([word for word in sorted(words.split(","))])

print(sorted_words)