def longest_word(sentence):
    words = sentence.split()
    return max(words, key=len)

print(longest_word("Margaret's toy is a pretty doll."))         # "Margaret's"
print(longest_word("A thing of beauty is a joy forever."))      # "forever."
print(longest_word("Forgetfulness is by all means powerless!")) # "Forgetfulness"