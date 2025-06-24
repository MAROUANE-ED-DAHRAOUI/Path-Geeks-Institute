def display_board(board):
    print("\n")
    print("   1   2   3")
    print("  -----------")
    print("1  " + board[0][0] + " | " + board[0][1] + " | " + board[0][2])
    print("  -----------")
    print("2  " + board[1][0] + " | " + board[1][1] + " | " + board[1][2])
    print("  -----------")
    print("3  " + board[2][0] + " | " + board[2][1] + " | " + board[2][2])
    print("  -----------")
    print("\n")


def player_input(board, player):
    while True:
        print("Player", player)
        pos = input("Enter row and column (example: 1 3): ")
        parts = pos.split()

        if len(parts) != 2:
            print("Please enter two numbers separated by space.")
            continue

        if not parts[0].isdigit() or not parts[1].isdigit():
            print("Please enter numbers only.")
            continue

        row = int(parts[0]) - 1
        col = int(parts[1]) - 1

        if row not in [0, 1, 2] or col not in [0, 1, 2]:
            print("Row and column must be between 1 and 3.")
            continue

        if board[row][col] != " ":
            print("That spot is taken. Choose another one.")
            continue

        board[row][col] = player
        break

def check_win(board):
    for row in board:
        if row[0] == row[1] == row[2] != " ":
            return True

    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] != " ":
            return True

    if board[0][0] == board[1][1] == board[2][2] != " ":
        return True

    if board[0][2] == board[1][1] == board[2][0] != " ":
        return True

    return False

# Check if all spaces are filled (tie)
def check_tie(board):
    for row in board:
        for space in row:
            if space == " ":
                return False
    return True

def play():

    board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]
    current_player = "X"

    display_board(board)

    while True:
        player_input(board, current_player)
        display_board(board)

        if check_win(board):
            print("Player", current_player, "wins! 🎉")
            break

        if check_tie(board):
            print("It's a tie!")
            break

        # Switch players
        if current_player == "X":
            current_player = "O"
        else:
            current_player = "X"

play()
