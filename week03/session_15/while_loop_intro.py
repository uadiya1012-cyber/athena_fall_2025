# WHILE loop intro

user_name = input("Give me your name: ")

while user_name == "Adiya":
    print(f"Sainuu {user_name}")
    user_name = "The end"

print("out of while loop")

counter = 0
while True:
    print(f"Counter is : {counter}")
    if counter > 10:
        break
    else:
        print(f"Counter is : {counter}.")
        counter = counter + 1
