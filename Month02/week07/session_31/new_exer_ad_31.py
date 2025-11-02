#1

# def count_unique_words(sentence):
    
#     lower_sentence = sentence.lower()

#     import string
#     for char in string.punctuation:
#         lower_sentence = lower_sentence.replace(char, ' ')

#     words = lower_sentence.split()

#     unique_words = set(words)

#     return len(unique_words)

# sentence = "Python бол сонирхолтой. Python нь маш сайн."
# unique_count = count_unique_words(sentence)
# print(f"Өвөрмөц үгийн тоо: {unique_count}")


#2

# def find_absent_students(registered, attended):

#     registered_set = set(registered)
#     attended_set = set(attended)

#     absent_students = registered_set - attended_set

#     return list(absent_students)

    

# registered_class = ["Дорж", "Сараа", "Болд", "Тулга"]
# attended_class = ["Сараа", "Болд"]
# absent_list = find_absent_students(registered_class, attended_class)
# print(f"Хичээлд ирээгүй: {absent_list}")

#3
# def filter_long_names(names, min_length):
#     long_names = []
#     for name in names:
#         if len(name) > min_length:
#             long_names.append(name)
#     return long_names

# name_list = ["Bat", "Nomin", "Ocir", "Ganbat"]
# filtered = filter_long_names(name_list, 4)
# print(f"5-аас дээш үсэгтэй нэр: {filtered}")


#4

# def check_inventory(available_products, customer_order):

#     available_set = set(available_products)
#     customer_set = set(customer_order)

#     missing_items = list(customer_set - available_set)
#     return missing_items

# available = ["Алим", "Сүү", "Талх"]
# order = ["Алим", "Талх", "Өндөг", "Нимбэг"]
# missing_items = check_inventory(available, order)
# print(f"Байхгүй бараа: {missing_items}")

#5

# def find_missing_id(id_list):

#     min_id = min(id_list)
#     max_id = max(id_list)

#     all_ids = set(range(min_id, max_id + 1))
#     given_ids = set(id_list)
#     missing_ids = all_ids - given_ids
#     return min(missing_ids)

# ids = [10, 11, 13, 14, 15]
# missing = find_missing_id(ids)
# print(f"Алга болсон ID: {missing}")



    

    




 



    
