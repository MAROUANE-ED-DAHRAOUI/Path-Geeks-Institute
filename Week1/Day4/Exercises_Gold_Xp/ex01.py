class BankAccount:
    def __init__(self, balance, username, password):
        self.balance = balance  # Fixed typo: _balnce -> balance
        self._username = username
        self._password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self._username == username and self._password == password:
            self.authenticated = True
        else:
            self.authenticated = False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("You must be authenticated to deposit.")
        if amount > 0:
            self.balance += amount

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("You must be authenticated to withdraw.")
        if 0 < amount <= self.balance:
            self.balance -= amount

class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, minimum_balance=0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("You must be authenticated to withdraw.")
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive.")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot withdraw: balance would fall below minimum balance.")
        self.balance -= amount

# def main():
#     account = MinimumBalanceAccount(100, "marouane", "marouan111", 50)
#     account.authenticate("marouane", "marouan111")

#     print(f"Initial balance: {account.balance}")
    
#     account.deposit(50)
#     print(f"Balance after deposit: {account.balance}")
    
#     try:
#         account.withdraw(30)
#         print(f"Balance after withdrawal: {account.balance}")
#         account.withdraw(80)
#     except Exception as e:
#         print(e)

# main()