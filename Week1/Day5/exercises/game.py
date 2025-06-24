import random

class Game:
    def __init__(self):
        pass
    def get_user_item(self):
        Array = ["Rock", "Paper", "Scissors"]
        Usr_input = (int)(input("PLeas Select: (1)Rock, (2)Paper, (3)Scissor : "))
        while True:
            if Usr_input == 1 or Usr_input == 2 or Usr_input == 3:
                return Array[Usr_input - 1]
            else:
                Usr_input = input("PLeas Select: (R)ock, (P)aper, (S)cissor : ")
    def get_computer_item(self):
        items = ["Rock", "Paper", "Scissors"]
        return random.choice(items)
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "It's a tie!"
        elif (user_item == "Rock" and computer_item == "Scissors") or \
             (user_item == "Paper" and computer_item == "Rock") or \
             (user_item == "Scissors" and computer_item == "Paper"):
            return "You win"
        else:
            return "You lose"



# def main():
#     game = Game()
#     user_input = game.get_user_item()
#     computer_choice = game.get_computer_item()
#     print(f"user input {user_input}\n computer {computer_choice}")

# main()
