# def add_two_numbers(num1, num2):
#     total = num1 + num2
    
#     return total

# result = add_two_numbers(10, 25)
# print(f"Нийлбэр: {result}")

#2
# def get_full_name(first_name, last_name):
#     full = first_name + "-ийн " + last_name
#     return full
# result = get_full_name("Бат", "Дорж")
# print(result)

#3
# def calculate_area(length, width):
#     square = length * width
#     return square

# result = calculate_area(10, 5)
# print(f"Талбай: {result}")

#4
# def celsius_to_fahrenheit(celsius):
#     C = celsius
#     F = C * 1.8 + 32
#     return F

# result = celsius_to_fahrenheit(30)
# print(f"Фаренгейт: {result}°F")

#5
# def is_even(number):
#     if number % 2 == 0:
#         return True
#     else:
#         return False
    
# result = is_even(10)
# result2 = is_even(7)
# print(result)
# print(result2)

# 6
# def to_uppercase(text):
#     return text.upper()

# result = to_uppercase("сайн уу")
# print(result)

#7
# def get_first_element(my_list):
#     return my_list[0]

# result = get_first_element("Алим")
# print(f"Эхний жимс: {result}")

#8
# def find_larger(num1, num2):
#     if num1 < num2:
#         return num2    
#     else:    
#         return num1

# result = find_larger(100, 55)
# print(f"Их тоо нь: {result}")    

#9
# def sum_list(numbers):
#     sum = 0
#     for i in range(len(numbers)):
#         sum = numbers[i] + sum
#     return sum    

# result = sum_list([12, 12, 12])
# print(f"Жагсаалтын нийлбэр нь: {result}")

#10
# def count_char(text, char_to_find):
#     count = 0
#     for i in range(len(text)):
#         if text[i] == char_to_find:
#             count = count + 1
#     return count

# result = count_char("Сайн байна уу", "а")
# print(f"'а' үсэг нь {result} удаа орсон байна.")  

#11
# def get_grade(score):
#     if score >= 90:
#         return "A"
#     elif score >= 80:
#         return "B"
#     elif score >= 70:
#         return "C"
#     elif score >= 60:
#         return "D"
#     else:
#         return "F"
    
# result = get_grade(77)
# print(f"Таны үнэлгээ: {result}")    

#12
# def is_prime(number):
#     if number % 2 == 0:
#         return False
#     else:
#         return True
    
# result = is_prime(7)
# result2 = is_prime(10)
# print(f"7 нь анхны тоо мөн үү? {result}")
# print(f"10 нь анхны тоо мөн үү? {result2}")

#13
# def is_palindrome(text):
#     if text == text[:: -1]:  (sol2)
#         return True
#     else:
#         return False
#      reversed_text = text[::-1] (sol2)
#      return text == reversed_text

# result = is_palindrome("level")
# result2 = is_palindrome("python")
# print(f"'level' палиндром мөн үү? {result}")
# print(f"'python' палиндром мөн үү? {result2}")  

#14
# def factorial(n):
#     sum = 1
#     for i in range(1, n + 1):
#         sum = sum * i

#     return sum

# result = factorial(10)
# print(f" 10-ын факториал: {result}")

#15
# def find_longest_word(words):
#     long = ""
#     longlength = 0
    
#     for i in words:
#         if len(long) < len(i):
#             long = i
#     return long        

# result = find_longest_word(["Би", "програмчлал", "сурч", "байна"])
# print(f"Хамгийн урт үг: {result}")

#16
# def get_stats(numbers):
#     sum = 0
#     max = numbers[0]
#     avg = 0
       
#     for i in numbers:
#         if i > max:
#             max = i 
#         sum = sum + i
#         avg = sum / len(numbers)

#     return sum, avg, max

# sum, avg, max = get_stats([50, 50])
# print(f"Нийлбэр: {sum}, Дундаж: {avg}, Максимум: {max} ")  

#17
      
# def remove_duplicates(my_list):
#     list2 = []
#     for i in my_list:
#         if i not in list2:
#             list2.append(i)

#     return list2

# result = remove_duplicates([1, 2, 2, 3, 4, 4, 5])
# print(f"Цэвэрлэсэн жагсаалт: {result}")  

#18
# def generate_fiponacci(n):
#     fib = []
#     a, b = 0, 1
#     for _ in range(n):
#         fib.append(a)
#         a, b = b, a + b
#     return fib
    # if n <= 0:           #(sol2)
    #     return []
    # if n == 1:
    #     return [0]
    # sequence = [0, 1]
    # while len(sequence) < n:
    #     next_value = sequence[-1] + sequence[-2]
    #     sequence.append(next_value)
    # return sequence

# result = generate_fiponacci(10)
# print(f"Фибоначчийн эхний 10 гишүүн: {result}")

#19
# def caesar_cipher(message, shift):
#     encrypted = ""
#     for char in message:
#         if 'a' <= char <= 'z':
#             shifted_code = ord(char) + shift
#             if shifted_code > ord('z'):
#                 shifted_code -= 26
#             encrypted += chr(shifted_code)
#         else:
#             encrypted += char
#     return encrypted

# encrypted_text = caesar_cipher("hello", 3)
# print(f"Шифрлэсэн үр дүн: {encrypted_text}")  

#20
# def calculate_score(actions):
#     score = 0
#     for action in actions:
#         if action == "hit":
#             score += 10
#         elif action == "miss":
#             score -= 5
#     return score

# game_actions = ["hit", "hit", "miss", "hit"]
# final_score = calculate_score(game_actions)
# print(f"Эцсийн оноо: {final_score}")




    
        





