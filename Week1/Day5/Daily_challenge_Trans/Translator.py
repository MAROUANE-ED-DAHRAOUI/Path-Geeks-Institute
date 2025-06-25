from googletrans import Translator

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# translator object
translator = Translator()

translations = {}

#Translate each word and add to dictionary
for word in french_words:
    result = translator.translate(word, src='fr', dest='en')
    translations[word] = result.text

print(translations)
