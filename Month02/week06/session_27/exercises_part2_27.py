#1


# def count_words(sentence):
#     words = sentence.split()
#     word_count = {}
        
#     for word in words:
#         if word not in word_count:
#             word_count[word] = 1
#         else:
#             word_count[word] += 1
    
#     print(word_count)            

# count_words("Энэ бол сайн дасгал")


#2


# def is_palindrome(text):

#     if text == text[::-1]:
#         print(True)
#     else:
#         print(False)

# is_palindrome("python")    



#3


# def factorial(n):
#     fact = 1
#     for i in range(1, n + 1):
#         fact *= i

#     print(fact)
# factorial(5)


# import math
# def factoral(n):
#     return(math.factorial(n))

# print(factoral(5))

#4


# def find_longest_word(words):
#     l = max(words, key=len)
#     print(l)
# find_longest_word(["python", "javascript", "програмчлал", "java"])



#
# def find_longeset_word(words):
    
#     longest = words[0]
#     for word in words:
#         if len(word) > len(longest):
#             longest = word
#     print(f"Хамгийн урт үг: {longest}")

# find_longeset_word(["python", "javascript", "програмчлал", "java"])


#5


# def get_stats(numbers):
    
#     total = sum(numbers)
#     average = total / len(numbers)
#     maximum = max(numbers)
#     return total, average, maximum

# nums = [10, 20, 30, 40, 50]
# total_val, avg_val, max_val = get_stats(nums)
# print(f"Нийлбэр: {total_val}, Дундаж: {avg_val}, Максимум: {max_val}")
    
#6

# def fizz_buzz(limit):
#     result = []
#     for i in range(1, limit +1):
#         if i % 3 == 0 and i % 5 == 0:
#             result.append("FizzBuzz")
#         elif i % 3 == 0:
#             result.append("Fizz")
#         elif i % 5 == 0:
#             result.append("Buzz")
#         else:
#             result.append(i) 
#     return result

# fizz_buzz_result = fizz_buzz(15)
# print(fizz_buzz_result)  


#7

# def remove_duplicates(my_list):
#     unique_list = []
#     for i in my_list:
#         if i not in unique_list:
#             unique_list.append(i)
#     return unique_list

# original = [1, 2, 2, 3, 4, 4, 5, 1, 6]
# result = remove_duplicates(original)
# print(f"Цэвэрлэсэн жагсаалт: {result}")

#8

# def caesar_cipher(message, shift):

#     encrypted_text = ""
    
#     for char in message:
#         if char.isalpha():
#             # Үсэг эсэхийг шалгах
#             ascii_offset = ord('a') if char.islower() else ord('A')
#             # Шифрлэх
#             shifted_char = chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)
#             encrypted_text += shifted_char
#         else:
#             # Үсэг биш тэмдэгтүүдийг өөрчлөхгүйгээр нэмэх
#             encrypted_text += char
    
#     return encrypted_text


# encrypted_text = caesar_cipher("hello world", 3)
# print(f"Шифрлэсэн үр дүн: {encrypted_text}")

#10

# def generate_fibonacci(n):
    
#     if n <= 0:
#         return []
#     elif n == 1:
#         return [0]
#     elif n == 2:
#         return [0, 1]
    
#     fib_sequence = [0, 1]

#     for i in range(2, n):
#         next_fib = fib_sequence[i-1] + fib_sequence[i-2]
#         fib_sequence.append(next_fib)

#     return fib_sequence

# fib_sequence = generate_fibonacci(10)
# print(f"Фибоначчийн эхний 10 гишүүн: {fib_sequence}")


#10

# def find_common_elements(list1, list2):

#     common_elements = []
#     for item in list1:
#         if item in list2 and item not in common_elements:
#             common_elements.append(item)
#     return common_elements

# result = find_common_elements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])
# print(f"Нийтлэг элементүүд: {result}")
