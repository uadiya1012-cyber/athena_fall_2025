#1

# def analyze_text(text):
    
#     total_characters = len(text)
    
#     words = text.split()
#     total_words = len(words)
    
#     letter_frequencies = {}
    
#     for char in text:
        
#         if char.isalpha():
#             char_lower = char
#             if char_lower not in letter_frequencies:
#                 letter_frequencies[char_lower] = 1
#             else:
#                 letter_frequencies[char_lower] += 1
    
#     return {
#         'total_chars': total_characters,
#         'total_words': total_words,
#         'letter_counts': letter_frequencies
#     }

# analyze = analyze_text("Сайн байна уу?")
# print(analyze)


#2

# from collections import Counter
# def are_anagrams(string1, string2):
#     def clean_text(text):
#         return ''.join(char.lower() for char in text if char.isalpha())
            
#     cleaned1 = clean_text(string1)
#     cleaned2 = clean_text(string2)

#     return Counter(cleaned1) == Counter(cleaned2)
    
   

# print(f"'Listen' ба 'Silent' анаграм мөн үү? {are_anagrams('Listen', 'Silent')}")
# print(f"'Hello' ба 'World' анаграм мөн үү? {are_anagrams('Hello', 'World')}")      



# from collections import Counter 

# def are_anagrams(string1, string2):

#     if len(string1) != len(string2): 
#         print("No")
#     else:
#         if Counter(string1) == Counter(string2):  
#             print("Yes")
#         else:
#             print("No")

# result = are_anagrams("listen", "silent")
# result2 = are_anagrams("hello", "world")

# print(result)
# print(result2)


#3
# def search_contacts(contacts, search_term):
#     result = []
#     search_term_lower = search_term.lower()

#     for contact in contacts:
#         if (search_term_lower in contact['name'].lower() or
#             search_term_lower in contact['phone']):
#             result.append(contact)
    
#     return result


# all_contacts = [
#     {'name': 'Дорж Бат', 'phone': '99110101'},
#     {'name': 'Сараа Болд', 'phone': '99220202'},
#     {'name': 'Болд Төмөр', 'phone': '95111223'}
# ]

# found_contacts = search_contacts(all_contacts, "болд")
# print(found_contacts)

#4
# def validate_users(users):
#     valid_users = []

#     for user in users:
#         if 'name' in user and 'email' in user:
#             if '@' in user['email']:
#                 valid_users.append(user)

#     return valid_users



# user_list = [
#     {'name': 'Дорж', 'email': 'dorj@email.com'},
#     {'name': 'Сараа'}, # имэйл байхгүй
#     {'email': 'bold@email.com'}, # нэр байхгүй
#     {'name': 'Номин', 'email': 'nomin-no-at-sign'} # '@' байхгүй
# ]

# validated_list = validate_users(user_list)
# print(validated_list)

#5

# def find_duplicates(numbers):
#     d = []
#     for number in numbers:
#         if numbers.count(number) > 1 and number not in d:
#             d.append(number)

#     return d

# number_list = [1, 2, 3, 2, 4, 5, 4, 1, 6]
# duplicate_numbers = find_duplicates(number_list)
# print(f"Давхардсан тоонууд: {duplicate_numbers}")

# def find_duplicates(numbers):

#     s = set()
#     duplicates = set()

#     for number in numbers:
#         if number in s:
#             duplicates.add(number)
#         else:
#             s.add(number)

#     return list(duplicates)

# number_list = [1, 2, 3, 2, 4, 5, 4, 1, 6]
# duplicate_numbers = find_duplicates(number_list)
# print(f"Давхардсан тоонууд: {duplicate_numbers}")



    



    

