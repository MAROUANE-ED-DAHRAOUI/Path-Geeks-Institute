import re

matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

# Read columns top to bottom, left to right
rows = len(matrix)
cols = len(matrix[0])

message = ""
for col in range(cols):
    for row in range(rows):
        char = matrix[row][col]
        message += char

decoded = re.sub(r'(?<=[A-Za-z])[^A-Za-z]+(?=[A-Za-z])', ' ', message)

print(decoded)
