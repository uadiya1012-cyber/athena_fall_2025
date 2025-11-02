#1
# def sum_two_numbers(num1, num2):
#     sum = num1 + num2
#     print(sum)
# sum_two_numbers(5, 7)

#2

# def check_even_odd():
#     number = int(input('Тоо оруулна уу: '))
#     if number % 2 == 0:
#         print("Тэгш тоо")
#     else:
#         print("Сондгой")
# check_even_odd()

#3

# def word_length():
#     word = input("Үг оруулна уу: ")
#     print(len(word))

# word_length()

#4

# def average_five():
#     total = 0
#     for i in range(5):
#         num = float(input(f"{i+1}-р тоо: "))
#         total += num
#     return total / 5

# print("Дундаж нь:", average_five())

#5
# def max_of_three():
#     a = int(input("a = "))
#     b = int(input("b = "))
#     c= int(input("c = "))

#     return max(a, b, c)

# print("Хамгийн их тоо:", max_of_three())

#6
# def check_unique_letters():
#     word = input("Үг оруулна уу: ")

#     uniq = set()
#     for letter in word:
#         if letter in uniq:
#             print("Давтагдсан үсэг байна.")
#             return
#         uniq.add(letter)

#     print("Бүх үсэг өөр байна.")

# check_unique_letters()

#7
# def check_age():
#     age = int(input("Насаа оруулна уу: "))
#     if age >= 18:
#         print("Та насанд хүрсэн байна.")
#     else:
#         print("Та насанд хүрээгүй байна.")

# check_age()

#8
# def capitalize_word():
#     word = input("Үгээ оруулна уу: ")
#     x = word.capitalize()
#     print(x)

# capitalize_word()

#9
# def student_scores():
#     scores = {}

#     for i in range(3):
#         name = input("Оюутны нэр: ")
#         score = int(input("Оноо: "))
#         scores[name] = score

#     return scores

# result = student_scores()
# print("Оюутнуудын оноо:", result)

#10

# def student_scores():
#     scores = {}
#     total = 0

#     for i in range(3):
#         name = input("Оюутны нэр: ")
#         score = int(input("Оноо: "))
#         scores[name] = score
#         total += score

#     average = total / 3
#     return scores, average

# result, average_score = student_scores()
# print("Дундаж оноо:", average_score)










   

   






