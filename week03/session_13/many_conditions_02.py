age = int(input("give me your age: "))

if age > 0 and age < 18:
    print("you are child ")
elif age >= 18:
    print("you are adult ")
elif age > 65:
    print("you are senior ")
else:
    print("you are too old")
        