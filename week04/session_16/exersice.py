#1
# def display_greeting():
#     print("-----------")
# display_greeting()
# print("Сайн уу, Python-ны ертөнцөд тавтай морил1")

#2
# def show_favorite_quote():
#     print("------------")
# show_favorite_quote()
# print("'Imagination is more important than knowledge.' - Albert Einshtein")    

#3
# def draw_square():
#     print("")
# draw_square()
# print("""
#     ______
#     |    |
#     |    |
#     ------  
#       """)

#4
# def print_recipe():
#     print("--- Өндөг шарах жор ---")
# print_recipe()
# print("""1. Хайруулын тавгаа халаана.
# 2. Тосоо хийнэ.
# 3. Өндөгөө хагалж хийнэ.
# 4. Давс нэмээд болгоно.
#       """)

#5
# def calculate_fixed_area():
#     print("")
# length = 10
# width = 5
# calculate_fixed_area = length * width
# print(f"Талбай нь {calculate_fixed_area} юм.")    

#6
# def show_menu():
#     print("--- Манай цэс ---")
# show_menu()
# print("""1. Хуушуур - 2000₮
# 2. Цуйван - 8000₮
# 3. Бууз - 1500₮
#       """)    

#7
# def sing_a_verse():
#     print("")
# sing_a_verse
# print("""Twinkle, twinkle, little star,
# How I wonder what you are!
# Up above the world so high,
# like a diamond in the sky.
#       """)

#8
# def count_to_ten():
#     print("")
# count_to_ten
# print("1-ээс 10 хүртэл тоолж байна:")
# for i in range(1, 11):
#     print(i)

#9
# def check_fixed_number():
#     number = 15 
#     if number % 2 == 0:
#         print("15 бол тэгш тоо байна")
#     else:
#         print("15 бол сондгой тоо байна")
# check_fixed_number()

#10
# import random
# def roll_dice():
#     number = random.randint(1, 6)
#     print(f"Шооны тоо {number}")
# roll_dice()   
# 
# #11
# def print_shopping_list():
#     foods = "Талх", "Сүү", "Өндөг", "Алим"    
#     for i in foods:
#         print(f"-{i}")
# print("Дэлгүүрээс авах зүйлс:") 
# print_shopping_list()

#12
# def greet_user():
#     name = input("Таны нэр хэн бэ? ")
#     print(f"Сайн уу, {name}!")  
# greet_user()

#13
# def draw_triangle():
#     for i in range(1, 6):
#         print("*" * i)
# draw_triangle()    
# 
# #14
# import time
# def show_loading_animation():
#     loading = ("...")
#     print(f"Ачааллаж байна{loading}")
#     time.sleep(0.5)
# show_loading_animation()
# print("Дуусаа!")   
# 
# #15
# import datetime
# def display_time():
#     x = datetime.datetime.now()
#     print(f"Одоогийн цаг: {x}")
# display_time()  
# 
#16
# import datetime
# def check_birthday_weekday(month, day):
#     this_year = datetime.date.today().year
#     birthday = datetime.date(this_year, month, day)
#     days = birthday.strftime("%A")
#     week_and_weekend = {
#         "Monday": "Даваа",
#         "Tuesday": "Мягмар",
#         "Wednesday": "Лхагва",
#         "Thursday": "Пүрэв",
#         "Friday": "Баасан",
#         "Saturday": "Бямба",
#         "Sunday": "Ням"
#     }
#     return week_and_weekend[days]
# month = int(input("Хэдэн сард төрсөн бэ? "))
# day = int(input("Хэдэнд төрсөн бэ? "))
# print(f"Энэ жилийн таны төрсөн өдөр {check_birthday_weekday(month, day)}") 
# check_birthday_weekday(month, day)

#17
# def multiplication_taple():
#     for i in range(1, 11):
#         print(f"7 * {i} = {7 * i}")
# print("--- 7-ийн хүрд нь ---")
# multiplication_taple() 

#18
# import random
# def coin_flip_game():
#     result = input("сүлд тоо аль нь вэ? ")
#     choice = random.choice(["сүлд", "тоо"])
#     print(f"Зоос {choice} буулаа ")
#     if result == choice:
#         print("Зөв таалаа")
#     else:
#         print("Харамсалтай байна, буруу")
# coin_flip_game()

#19
# from datetime import date
# def days_until_new_year():
#     today = date.today()
#     new_year = date(today.year + 1, 1, 1)
#     left_days = (new_year - today).days
#     print(f"Шинэ жил болоход {left_days} хоног үлдлээ!")
# days_until_new_year() 

#20
# import time
# def countdown():
#     for i in range(10 , 0, -1):
#         print(i)
#         time.sleep(1)
#     print("Хөөрлөө!")
# countdown()   

#21
# import os
# import platform
# def show_system_info():
#     print("--- Системийн Мэдээлэл ---")
#     system_name = platform.system()
#     current_directory = os.getcwd()
#     user_name = os.getlogin()
#     print("Үйлдлийн систем:", system_name)
#     print("Одоогийн хавтас:", current_directory)
#     print("Хэрэглэгчийн нэр:", user_name)
#     print("------------------------")
# show_system_info()

#22
# import random
# import string
# def generate_simple_password():
#     characters = string.ascii_letters + string.digits
#     password = ''.join(random.choice(characters) for _ in range(8))
#     print("Таны шинэ нууц үг:", password)
# generate_simple_password() 

#23
# import os
# # def organize_project_folder():
# #     project_folder = "project"
# #     subfolders = ["src", "docs", "assets"]
# #     print("Хавтас шалгаж байна...")
# #     for folder in subfolders:
# #         path = os.path.join(project_folder, folder)
# #         if not os.path.exists(path):
# #             os.mkdir(path)
# #             print(f"'{folder}' хавтас үүсэглээ.")
# #         else:
# #             print(f"'{folder}' хавтас аль хэдийн байна.")
# #     print("Зохион байгуулалт дууслаа.")          
# # organize_project_folder()      

#24
# import random
# def math_quiz():
#     number1 = random.randint(1, 10)
#     number2 = random.randint(1, 10)
#     answer = int(input(f"{number1} + {number2} = "))
#     if answer == number1 + number2:
#         print("Зөв!")
#     else:
#         print("Буруу!")    
# math_quiz()    

#25
# import webbrowser
# def open_website():
#     url = "https://www.google.com/"
#     webbrowser.open(url)
#     print(f"'{url}'-г таны вэб хөтөч дээр нээж байна... ")
# open_website()    








       




        