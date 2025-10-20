#1
# def greet_by_name(name):
#     print(f"Сайн уу, {name}!")
# greet_by_name("Дорж")
# greet_by_name("Сараа")    

#2
# def add_two_numbers(num1, num2):
#     sum = num1 + num2
#     print(f"{num1} + {num2} = {sum}")
    

# add_two_numbers(10, 25)  
# add_two_numbers(100, -50) 

#3
# def print_fav_color(color):
#     print(f"Миний дуртай өнгө бол {color}")
# print_fav_color("цэнхэр")  

#4
# def calculate_area(length, width):
#     square = length * width
#     print(f"Урт={length}, Өргөн={width} үед талбай нь {square} байна.")
# calculate_area(10, 5)    

#5
# def repeat_message(message, time):
#     for i in range(3):
#         print(f"Python бол сонирхолтой!")
# repeat_message("Python бол сонирхолтой!", 3)     

#6
# def describe_pet(name, animal_type):
#     print(f"Миний {animal_type}-г {name} гэдэг")
# describe_pet("Банхар", "нохой")    

#7
# def print_address(city, district, street):
#     print("--- Хаяг ---")
#     print(f"""
# Хот: {city}
# Дүүрэг: {district}
# Гудамж: {street}
# """)
# print_address("Улаанбаатар", "Баянзүрх", "Гачуурт")    

#8
# def show_multiplication_table(number):
#     print("--- 9-ийн хүрд нь ---")
#     for i in range(1, 11):
#         print(f"{number} * {i} = {number * i}")
# show_multiplication_table(9)

#9
# def check_even_odd(number):
#     if number % 2 == 0:
#         print(f"{number} бол тэгш тоо.")
#     else:
#         print(f"{number} бол сондгой тоо.")
# check_even_odd(10)
# check_even_odd(17)  

#10
# def draw_line(length, character):
    
#     print(f"{character * length}")
# draw_line(5, "a")    
# draw_line(20, "*")    

#11
# def check_password(password_attempt):
#     correct_password = "python123"
#     if password_attempt == correct_password:
#         print("Нууц үг зөв байна. Нэвтрэх эрх олгогдлоо.")
#     else:
#         print("Нууц үг буруу байна. Дахин оролдоно уу.")
# check_password("python222")
# check_password("python123")  

#12
# def print_list_items(my_list):
#     for i, item in enumerate(my_list, 1):
#         print(f"{i}. {item}")
# #     counter = 1
    
# #     for fruit in my_list:
# #         print(f"{counter}. {fruit}")
# #         counter = counter + 1

# fruits = ["Алим", "Банана", "Жүрж"]

# print_list_items(fruits)                (## ба # нь хоёр тусдаа арга)

#13
# def calculate_discount(price, percentage):
#     percentage = percentage * price / 100
#     total = price - percentage
#     print(f"Анхны үнэ: {price}, Хямдрал нь: {percentage}, Эцсийн дүн: {total}")

# calculate_discount(50000, 10)

#14
# def check_age_group(age):
#     if age < 18:
#         print(f"{age} нас бол 'Өсвөр насны' ангилалд багтана.")
#     elif age < 65:
#         print(f"{age} нас бол 'Насанд хүрсэн' ангилалд багтана.")
#     else:
#         print(f"{age} нас бол 'Ахмад настан' ангилалд багтана.")      

# # check_age_group(15)    
# # check_age_group(30)   
# check_age_group(70)   

#15
# import time
# def countdown_from(start_number):
#     print(f"{start_number}-с тоолж эхэллээ...")
#     for i in range(start_number, 0, -1):
#         print(i)
#         time.sleep(1)
#     print("Хөөрлөө! 🚀🚀🚀")

# countdown_from(10)

#16
# def draw_rectangle(width, height, character):
#     for _ in range(height):
#         print(character * width)

# draw_rectangle(10, 4, "#")  

#17
# def draw_pyramid(heigh):
#     for i in range(1, heigh, + 1):
#         spaces = " " * (heigh - i)
#         stars = "*" * (2 * i - 1)
#         print(spaces + stars)

# draw_pyramid(6)

#18
# def convert_grade_to_letter(score):
#     if score >= 90:
#         print(f"{score} бол 'A' үнэлгээ юм.")
#     elif score >= 80:
#         print(f"{score} бол 'B' үнэлгээ юм.")    
#     elif score >= 70:
#         print(f"{score} бол 'C' үнэлгээ юм.")
#     elif score >= 60:
#         print(f"{score} бол 'D' үнэлгээ юм.")
#     else:
#         print(f"{score} бол 'F' үнэлгээ юм.")

# convert_grade_to_letter(60)
# convert_grade_to_letter(99)
# convert_grade_to_letter(43)
# convert_grade_to_letter(84)
# convert_grade_to_letter(72)

#19
# def convert_celsius_to_fahrenheit(celsius):
#     C = celsius

#     F = C * 1.8 + 32
#     print(f"{celsius} нь {F}-тэй тэнцүү.")

# convert_celsius_to_fahrenheit(30)    

#20
# import math
# def check_if_prime(n):
#     if n <= 1:
#         return False
#     # print(f"{n} бол анхны тоо биш.")
#     for i in range(2, int(math.sqrt(n)) + 1):
#         if n % i == 0:
#             return False
#     return True
#     # print(f"{n} бол анхны тоо мөн.")
# print(check_if_prime(7))
# print(check_if_prime(10))

#21
# def fizz_buzz(limit):
#     for i in range(1, limit + 1):
#         if i % 3 == 0:
#             print("Fizz")
#         elif i % 5 == 0:
#             print("Buzz")
#         elif i % 3 and 5 == 0:
#             print("FizzBuzz")
#         else:
#             print(i)    

# fizz_buzz(15) 

#22
# def check_password_strength(password):
#     if len(password) < 8:
#         print("Сул")
#     elif password.isalpha() or password.isdigit():
#         print("Дунд")
#     elif any(ch.isalpha() for ch in password) and any(ch.isdigit() for ch in password):
#         print("Хүчтэй")
#     else:
#         print("Маш хүчтэй")

# check_password_strength("12345")
# check_password_strength("abcdefghi")
# check_password_strength("python123")



#23
# def find_common_elements(list1, list2):
#     common = []
#     for i in list1:
#         if i in list2:
#             common.append(i)
#     return common        

# print(find_common_elements([1, 2, 3, 4], [3, 4, 5, 6]))

#24
# def draw_hollow_rectangle(width, height, character):
#     for i in range(height):
#         if i == 0 or i == height - 1:
#             print(character * width)
#         else:
#             print(character + " " * (width - 2) + character)

# draw_hollow_rectangle(12, 5, "*")

#25
# def encrypt_caesar(message, shift):
#     result = ""
#     for ch in message:
#         if ch.isalpha():
#             base = ord('A') if ch.isupper() else ord('a')
#             result += chr((ord(ch) - base + shift) % 26 + base)
#         else:
#             result += ch
#     print(f"Анхны мессеж: '{message}', Шифрлэсэн үр дүн: '{result}'")

# encrypt_caesar("hello world", 3)


