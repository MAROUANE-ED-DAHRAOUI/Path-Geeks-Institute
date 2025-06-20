longest = ""
while True:
    sentence = input("Enter the longest sentence you can without the letter 'A': ")
    if 'a' in sentence.lower():
        continue
    if len(sentence) > len(longest):
        longest = sentence
        print("Congratulations! That's the new longest sentence.")