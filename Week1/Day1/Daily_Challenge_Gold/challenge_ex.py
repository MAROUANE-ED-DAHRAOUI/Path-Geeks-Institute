from datetime import datetime

birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")

# Convert the string to a date object
birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")
today = datetime.today()

# Calculate the user's age
age = today.year - birthdate.year
if (today.month, today.day) < (birthdate.month, birthdate.day):
    age -= 1

# Find the last digit of the age 
candles = age % 10
if candles == 0:
    candles = 10  

candle_str = "i" * candles

print(f"""
       ___{candle_str}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
""")