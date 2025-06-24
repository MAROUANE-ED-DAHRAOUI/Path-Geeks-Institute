from game import Game

def play():
    game = Game()
    user_input = game.get_user_item()
    computer_choice = game.get_computer_item()
    result = game.get_game_result(user_input, computer_choice)

    if result == "You win":
        print(f"\033[92mYou selected {user_input}. The computer selected {computer_choice}. You win!  :-)\033[0m")
    elif result == "It's a tie!":
        print(f"\033[93mYou selected {user_input}. The computer selected {computer_choice}. You drew!  :-|\033[0m")
    else:
        print(f"\033[91You selected {user_input}. The computer selected {computer_choice}. You lose!  :-( \033[0m")

    return result

def get_user_menu_choice():
    
    print("\033[96mMenu:\033[0m")
    print("\033[92m(1) Play a new game\033[0m")
    print("\033[92m(2) Show scores\033[0m")
    print("\033[91m(3) Quit\033[0m")
    choice = input("\033[93mEnter your choice (1/2/3): \033[0m")
    if choice == "1":
        return "Play a new game"
    elif choice == "2":
        return "Show scores"
    elif choice == "3":
        return "Quit"
    else:
        print("\033[91mInvalid choice.\033[0m")
        return None

def print_results(results):
    print("Game Results:")
    print(f"\033[92mWins   : {results.get('win', 0)}\033[0m")
    print(f"\033[91mLosses : {results.get('loss', 0)}\033[0m")
    print(f"\033[94mDraws  : {results.get('draw', 0)}\033[0m")
    print("\033[93mThank you for playing!\033[0m")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    while True:
        choice = get_user_menu_choice()
        if choice == "Play a new game":
            game = Game()
            result = play()
            if result in results:
                results[result] += 1
        elif choice == "Show scores":
            print_results(results)
        elif choice == "Quit":
            print_results(results)
            break

main()
