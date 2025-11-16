# 1. Хувьсагч, Өгөгдлийн Төрөл ба Үндсэн I/O (Дасгал 1-5)

#1

# name = input("Таны нэр хэн бэ? ")
# print(f"Сайн уу, {name}!")

#2

# width = int(input("Өргөн: "))
# height = int(input("Урт: "))
# area = width * height
# print(f"Тэгш өнцөгтийн талбай {area}")

#3

# celsius = float(input("Цельсийн хэм: "))
# fahrenheit = (celsius * 9/5) + 32
# print(f"Фаренгейтийн хэм: {fahrenheit}")

#4

# a = 10
# b = 3.14
# c = "Сайн уу"
# d = True

# print(type(a))
# print(type(b))
# print(type(c))
# print(type(d))

#5

# import datetime

# current_year = datetime.date.today().year
# age = int(input("Та хэдэн настай вэ? "))
# birth_year = current_year - age
# print(f"Та ойролцоогоор {birth_year} онд төрсөн.")


# 2. Тэмдэгт Мөр (Strings) (Дасгал 6-10)

#6

# text = input("Үг бичнэ үү: ")
# print(f"Үгийн урт: {len(text)}")

#7

# text = input("Үг бичнэ үү: ")
# print(f"Том үсгээр: {text.upper()}")
# print(f"Жижиг үсгээр: {text.lower()}")

#8

# s = "Programming"
# print(s[4:8])

#9

# text = input("Текст оруулна уу: ")
# char = input("Хайх тэмдэгт: ")
# index = text.find(char)
# print(f"'{char}' тэмдэгт {index} индекст олдлоо.")

#10

# word = input("Шалгах үг: ")
# is_palindrome = word == word[::-1]
# print(f"Палиндром мөн үү? {is_palindrome}")


#3. Нөхцөл шалгах (if/elif/else) (Дасгал 11-15)

#11

# num = int(input("Тоо оруулна уу: "))
# if num % 2 == 0:
#     print("Тэгш тоо")
# else:
#     print("Сондгой тоо")

#12

# score = int(input("Оноо (0-100): "))
# if score >= 90:
#     print("Дүн: A")
# elif score >= 80:
#     print("Дүн: B")
# elif score >= 70:
#     print("Дүн: C")
# elif score >= 60:
#     print("Дүн: D")
# else:
#     print("Дүн: F")

#13

# num = float(input("Тоо оруулна уу: "))
# if num > 0:
#     print("Эерэг тоо")
# elif num < 0:
#     print("Сөрөг тоо")
# else:
#     print("Тэг")

#14

# username = input("Хэрэглэгчийн нэр: ")
# password = input("Нууц үг: ")

# if username == "admin" and password == "12345":
#     print("Нэвтрэх эрх зөвшөөрөгдлөө")
# else:
#     print("Нэвтрэх эрх буруу")

#15

# year = int(input("Он оруулна уу: "))
# if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
#     print(f"{year} он бол Өндөр жил")
# else:
#     print(f"{year} он бол Өндөр жил биш")

# 4. Давталт (for, while) (Дасгал 16-20)

#16

# for i in range(1, 11):
#     print(i)

#17

# n = int(input("N тоог оруулна уу: "))
# total_sum = 0
# for i in range(1, n +1):
#     total_sum += i
# print(f"1-ээс {n} хүртэлх тооны нийлбэр: {total_sum}")

#18

# count = 10
# while count > 0:
#     print(count)
#     count -= 1
# print("Дэлбэрлээ!")

#19

# text = input("Текст оруулна уу: ")
# vowel_count = 0
# vowels = "aeiou"
# for char in text.lower():
#     if char in vowels:
#         vowel_count += 1
# print(f"Нийт эгшгийн тоо: {vowel_count}")

#20

# import random
# secret_number = random.randint(1, 20)
# print("Би 1-20 хооронд нэг тоо нуусан. Таагаарай!")

# while True:
#     try:
#         guess = int(input("Таны таамаг: "))
#         if guess < secret_number:
#             print("Дэндүү бага байна.")
#         elif guess > secret_number:
#             print("Дэндүү их байна.")
#         else:
#             print(f"Баяр хүргэе! Та {secret_number} тоог зөв таалаа.")
#             break
#     except ValueError:
#         print("Зөвхөн тоо оруулна уу!")


# 5. Жагсаалт (Lists) (Дасгал 21-25)

#21

# fruits = ["apple", "banana", "orange", "grapes", "strawberry"]
# print(f"Бүх жимс: {fruits}")
# print(f"Эхний жимс: {fruits[0]}")
# print(f"Сүүлийн жимс: {fruits[-1]}")

#22

# shopping_list = []
# shopping_list.append("milk")
# shopping_list.append("egg")
# shopping_list.append("bread")
# print(f"Нэмсний дараа: {shopping_list}")

# shopping_list.remove("egg")
# print(f"Хассны дараа: {shopping_list}")

#23

# numbers = [5, 22, 9, 1, 101]
# print(f"Жагсаалт: {numbers}")
# print(f"Хамгийн бага: {min(numbers)}")
# print(f"Хамгийн их: {max(numbers)}")
# print(f"НийлбэрД {sum(numbers)}")

#24

# squares = [x**2 for x in range(1, 11)]
# print(squares)

#25

# grades = [55, 88, 75, 92, 49, 100]
# passing_grades = []
# for grade in grades:
#     if grade >= 60:
#         passing_grades.append(grade)
# print(f"Тэнцсэн дүн: {passing_grades}")

# 6. Tuple (Дасгал 26-28)

#26

# point = (10, 20, 30)
# print(f"Y координат: {point[1]}")

#27

# person = ("Alice", 30, "Software Engineer")
# name, age, job = person

# print(f"Нэр: {name}")
# print(f"Нас: {age}")
# print(f"Ажил: {job}")

#28

# t = (1, 2, 3)
# try:
#     t[0] = 4
# except TypeError as e:
#     print(f"Алдаа гарлаа: {e}")

# 7. Толь бичиг (Dictionaries) (Дасгал 29-33)

#29

# car = {
#     "make": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# print(f"Машины загвар: {car['model']}")

#30

# student = {}
# student["name"] = "John"
# student["grade"] = 88
# print(f"Анхны: {student}")
# student["grade"] = 92
# print(f"Өөрчлөгдсөн: {student}")

#31

# car = {
#     "make": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# for key, value in car.items():
#     print(f"{key}: {value}")

#32

# stock = {"apples": 5, "bananas": 10, "oranges": 3}
# item = input("Хайх зүйл: ")

# if item in stock:
#     print(f"Тийм ээ, '{item}' {stock[item]} ширхэг байна.")
# else:
#     print(f"Үгүй, '{item}' нөөцөд байхгүй.")

#33

# text = "hello world hello"
# word_counts = {}
# words = text.split()
# for word in words:
#     word_counts[word] = word_counts.get(word, 0) + 1 
# print(word_counts)

# 8. Олонлог (Sets) (Дасгал 34-36)

#34

# numbers = [1, 2, 2, 3, 4, 3, 5, 1]
# unique_numbers = set(numbers)
# print(unique_numbers)

#35

# set_a = {1, 2, 3, 4}
# set_b = {3, 4, 5, 6}
# union_set = set_a.union(set_b)
# print(union_set)

#36

# set_a = {1, 2, 3, 4}
# set_b = {3, 4, 5, 6}
# intersection_set = set_a.intersection(set_b)
# print(intersection_set)

# 9. Файлууд (I/O) (Дасгал 37-40)

#37

# quote = input("Дуртай эшлэлээ бичнэ үү: ")
# with open("quote.txt", "w", encoding="utf-8") as f:
#     f.write(quote)
# print("Эшлэлийн quote.txt файлд хадгаллаа")

#38

# try:
#     with open("quote.txt", "r", encoding="utf-8") as f:
#         content = f.read()
#         print("Файлын агуулга:")
#         print(content)
# except FileNotFoundError:
#     print("quote.txt файл олдсонгүй. Эхлээд 37-р дасгалыг хийнэ үү.")

#39

# with open("quote.txt", "a", encoding="utf-8") as f:
#     f.write("\nЭнэ бол шинэ мөр.")
# print("Файлд шинэ мөр нэмлээ.")

#40

# try:
#     with open("quote.txt", "r", encoding="utf-8") as f:
#         lines = f.readlines()
#         print(f"Файлд нийт {len(lines)} мөр байна.")
# except FileNotFoundError:
#     print("quote.txt файл олдсонгүй.")

# 10. Turtle График (Дасгал 41-45)

# 41

# import turtle
# t = turtle.Turtle()
# for _ in range(4):
#     t.forward(100)
#     t.left(90)
# turtle.done()

#42

# import turtle
# t = turtle.Turtle()
# for _ in range(3):
#     t.backward(100)
#     t.left(120)
# turtle.done()

#43

# import turtle
# color = turtle.textinput("Өнгө сонгох", "Ямар өнгө зурах вэ? (red, blue, green...): ")
# t = turtle.Turtle()
# t.color(color)
# t.circle(50)
# turtle.done()

#44

# import turtle
# import random
# t = turtle.Turtle()
# t.speed(0)
# while True:
#     t.backward(20)
#     t.left(random.randint(-90, 90))

#45

# import turtle
# t = turtle.Turtle()
# t.pensize(5) # Зузаан болгох

# # "А" үсэг
# t.up()
# t.goto(-50, 0)
# t.down()
# t.left(75)
# t.forward(100)
# t.right(150)
# t.forward(100)
# t.backward(50) # Дунд талын зураас
# t.right(105)
# t.forward(30)

# # "Б" үсэг
# t.up()
# t.goto(50, 0)
# t.down()
# t.left(90)
# t.forward(100)
# t.right(90)
# t.circle(-25, 180) # Дээд нум
# t.circle(-25, 180) # Доод нум

# t.hideturtle() # Яст мэлхийг нуух
# turtle.done()

# 11. Бүгдийг Нэгтгэх (Дасгал 46-50)

#46

# word_counts = {}
# try:
#     with open("quote.txt", "r", encoding="utf-8") as f:
#         text = f.read().lower()
    
#     # Цэг тэмдгийг устгах
#     cleaned_text = text.replace(".", "").replace(",", "").replace("!", "").replace("?", "")
#     words = cleaned_text.split()
    
#     for word in words:
#         word_counts[word] = word_counts.get(word, 0) + 1
    
#     print("Файл дахь үгсийн тоо:")
#     print(word_counts)

# except FileNotFoundError:
#     print("quote.txt файл олдсонгүй.")

#47


# contacts = {}
# while True:
#     choice = input("\nҮйлдэл сонгоно уу (add, view, quit): ").lower()
#     if choice == "add":
#         name = input("Нэр: ")
#         phone = input("Утасны дугаар: ")
#         contacts[name] = phone
#         print(f"{name}-г нэмлээ.")
#     elif choice == "view":
#         if not contacts:
#             print("Холбоо барих мэдээлэл хоосон байна.")
#         else:
#             print("--- Холбоо барих мэдээлэл ---")
#             for name, phone in contacts.items():
#                 print(f"{name}: {phone}")
#     elif choice == "quit":
#         print("Гарлаа.")
#         break
#     else:
#         print("Буруу команд. 'add', 'view', 'quit' аль нэгийг сонгоно уу.")

#48

# shopping_list = []
# while True:
#     choice = input("\nҮйлдэл (add, remove, view, save, quit): ").lower()
    
#     if choice == "add":
#         item = input("Нэмэх зүйл: ")
#         shopping_list.append(item)
#         print(f"'{item}'-г нэмлээ.")
#     elif choice == "remove":
#         item = input("Хасах зүйл: ")
#         if item in shopping_list:
#             shopping_list.remove(item)
#             print(f"'{item}'-г хаслаа.")
#         else:
#             print(f"'{item}' жагсаалтад байхгүй.")
#     elif choice == "view":
#         print(f"\n--- Таны жагсаалт ---")
#         for item in shopping_list:
#             print(f"- {item}")
#     elif choice == "save":
#         with open("list.txt", "w", encoding="utf-8") as f:
#             for item in shopping_list:
#                 f.write(f"{item}\n")
#         print("Жагсаалтыг list.txt файлд хадгаллаа.")
#     elif choice == "quit":
#         print("Гарлаа.")
#         break
#     else:
#         print("Буруу команд.")

#49

# students = [
#     {"name": "Alice", "grade": 95},
#     {"name": "Bob", "grade": 82},
#     {"name": "Charlie", "grade": 91},
#     {"name": "David", "grade": 75}
# ]

# print("--- 90-ээс дээш оноотой сурагчид ---")
# for student in students:
#     if student["grade"] > 90:
#         print(student["name"])

#50

# import turtle
# import random

# screen = turtle.Screen()
# screen.setup(width=500, height=400)

# colors = ["red", "green", "blue", "orange"]
# all_turtles = []
# y_position = -100

# for turtle_color in colors:
#     t = turtle.Turtle(shape="turtle")
#     t.color(turtle_color)
#     t.up()
#     t.goto(x=-230, y=y_position)
#     y_position += 60
#     all_turtles.append(t)

# user_bet = screen.textinput(title="Бооцоо тавь", prompt="Аль яст мэлхий ялах вэ? (red, green, blue, orange):")
# is_race_on = True

# while is_race_on:
#     for t in all_turtles:
#         if t.xcor() > 230: # Барианы шугам
#             is_race_on = False
#             winner_color = t.pencolor()
#             if winner_color == user_bet:
#                 print(f"Баяр хүргэе! {winner_color} яст мэлхий яллаа! Та хожлоо.")
#             else:
#                 print(f"Харамсалтай! {winner_color} яст мэлхий яллаа. Та хожигдлоо.")
        
#         rand_distance = random.randint(0, 10)
#         t.forward(rand_distance)

# screen.exitonclick()















