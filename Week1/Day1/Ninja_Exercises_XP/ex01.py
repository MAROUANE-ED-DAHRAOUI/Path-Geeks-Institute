>>> 3 <= 3 < 9
True

>>> 3 == 3 == 3
True

>>> bool(0)
False

>>> bool(5 == "5")
False

>>> bool(4 == 4) == bool("4" == "4")
True

>>> bool(bool(None))
False

x = (1 == True)      # True, because 1 == True (True is 1)
y = (1 == False)     # False, because 1 != False (False is 0)
a = True + 4         # 1 + 4 = 5 (True is 1)
b = False + 10       # 0 + 10 = 10 (False is 0)

print("x is", x)     # x is True
print("y is", y)     # y is False
print("a:", a)       # a: 5
print("b:", b)       # b: 10