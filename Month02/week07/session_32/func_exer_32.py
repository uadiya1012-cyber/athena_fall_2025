# exercises
#1
# def greet():
#     name = input("Give me your name: ")
#     print(f"Hello, {name}! Welcome to Python.")

# greet()

#2

# def add_numbers(num1, num2):
#     sum = num1 + num2
#     return sum
    
# print(add_numbers(4,7))

#3

# def sum_list(numbers):
#     total = sum(numbers)


#     return total
# print(sum_list([1, 2, 3, 4, 5]))

#4

# def unique_words(text):
    
#     words = text.lower().split()
    
#     return set(words)

# print(unique_words("Python бол хүчтэй бөгөөд python хөгжилтэй"))

#5

# def find_min_max(numbers):
#     return (min(numbers), max(numbers))

# print(find_min_max([3, 9, 1, 6, 2]))

#6
# import random
# import string
# def generate_password(length):
#     char = string.ascii_letters + string.digits + string.punctuation
#     return ''.join(random.choices(char, k=length))
# password = generate_password(10)
# print(password)

#7

# def word_count(text):
#     words = text.split()
#     count_dict = {}
    
#     for word in words:
#         if word in count_dict:
#             count_dict[word] += 1
#         else:
#             count_dict[word] = 1
    
#     return count_dict

# print(word_count("алим гадил алим жүрж гадил алим"))

# def word_count(text):
#     words = text.split()
#     count_dict = {}

#     for word in words:
#         count_dict[word] = count_dict.get(word, 0) + 1

#     return count_dict

# print(word_count("алим гадил алим жүрж гадил алим"))

#8

# def filter_even(numbers):
#     result = []
#     for number in numbers:
#         if number % 2 == 0:
#             result.append(number)

#     return result

# print(filter_even([1, 2, 3, 4, 5, 6]))

# def filter_even(numbers):
#     return [num for num in numbers if num % 2 == 0]
# print(filter_even([1, 2, 3, 4, 5, 6]))

#9

# from datetime import datetime
# def days_between(date1, date2):
#     d1 = datetime.strptime(date1, "%Y-%m-%d")
#     d2 = datetime.strptime(date2, "%Y-%m-%d")
#     difference = abs(d2 - d1)
#     return difference.days

# def week(date1, date2):
#     days = days_between(date1, date2)
#     return days // 7

# print(days_between('2025-01-01', '2025-10-25'))
# print(week('2025-01-01', '2025-10-25'))


#10
# import itertools

# def generate_combinations(elements, r):
#     return list(itertools.combinations(elements, r))
# print(generate_combinations(['A', 'B', 'C', 'D'], 2))

# def generate_permutations(elements, r):
#     return list(itertools.permutations(elements, r))
# print(generate_permutations(['A', 'B', 'C', 'D'], 2))

    










