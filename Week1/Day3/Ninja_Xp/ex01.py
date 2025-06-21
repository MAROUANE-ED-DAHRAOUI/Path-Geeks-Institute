class Phone:
    def __init__(self, phone_number):
        self._phone_number = phone_number
        self.call_history = []
        self.message = []

    def call(self, other_phone):
        call_string = f"{self._phone_number} called {other_phone._phone_number}"
        print(call_string)
        self.call_history.append(call_string)

    def show_call_history(self):
        print("\nCall History: ")
        for call in self.call_history:
            print(call)

    def send_message(self, another_phone, content):
        message = {
            "to": another_phone._phone_number,
            "from": self._phone_number,
            "content": content
        }
        self.message.append(message)
        print(f"message sent from {self._phone_number} to {another_phone._phone_number}: {content}")

    def show_outgoing_messages(self):
        print("\nOutgoing Messages: ")
        for msg in self.message:
            print(f"To: {msg['to']}, From: {msg['from']}, Content: {msg['content']}")

    def show_incoming_messages(self):
        print("\nIncoming Messages: ")
        for msg in self.message:
            if msg['to'] == self._phone_number:
                print(f"From: {msg['from']}, Content: {msg['content']}")
    
    def show_messages_from(self):
        print("\nMessages from: ")
        for msg in self.message:
            if msg['from'] == self._phone_number:
                print(f"To: {msg['to']}, Content: {msg['content']}")


# test my code "a lot of time and a lot of effort pff :-("

# def main():
#     phone1 = Phone("123-456-7890")
#     phone2 = Phone("098-765-4321")

#     phone1.call(phone2)
#     phone2.call(phone1)

#     phone1.show_call_history()
#     phone2.show_call_history()

#     phone1.send_message(phone2, "Hello Iam here brother :-)")
#     phone2.send_message(phone1, "Hi brother, I am fine. How are you?")

#     phone1.show_outgoing_messages()
#     phone2.show_incoming_messages()
#     phone1.show_messages_from()
#     phone2.show_incoming_messages()
#     phone2.show_messages_from()
# main()