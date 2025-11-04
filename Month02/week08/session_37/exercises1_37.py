# #1
# import string
# def count_words(filename):
#     word_count = {}
#     try:
#         with open(filename, 'r') as file:
#             content = file.read()
#             content = content.lower()
#             translator = str.maketrans('', '', string.punctuation)
#             content = content.translate(translator)
#             words = content.split()
#             for word in words:
#                 if word in word_count:
#                     word_count[word] += 1
#                 else:
#                     word_count[word] = 1
#         return word_count
#     except FileNotFoundError:
#         print(f"Алдаа: {filename} нэртэй файл олдсонгүй.")
#         return None

# def print_top_5(word_counts):
#     if not word_counts:
#         print("Тоолох үг олдсонгүй.")
#         return
#     sorted_words = sorted(word_counts.items(), key=lambda item: item[1], reverse=True)
#     print("--- Хамгийн их давтагдсан 5 үг ---")

#     for word, count in sorted_words[:5]:
#         print(f"{word}: {count}")

# if __name__ == "__main__":
#     counts = count_words('input.txt')
#     if counts:
#         print_top_5(counts) 

#2

# def calculate_total(price_list, cart):
#     total_price = 0.0
#     print("=== НЭХЭМЖЛЭЛ ===")

#     for item in cart:
#         if item in price_list:
#             price = price_list[item]
#             total_price += price
#             print(f" {item}: ${price:.2f}")
#         else:
#             print(f" (АЛДАА: '{item}' олдсонгүй, алгаслаа.)")

#     return total_price

# if __name__ == "__main__":
#     products = {
#         "apple": 1.50,
#         "bread": 2.20,
#         "milk": 0.90,
#         "cheese": 3.75
#     }
#     shopping_card = ["apple", "bread", "milk", "apple", "cheese", "milk", "banana"]

#     total = calculate_total(products, shopping_card)
#     print("=================")
#     print(f"Нийт дүн: ${total:.2f}")

#3
# import json

# def filter_active_users(input_json, output_txt):
#     try:
#         with open(input_json, 'r') as f_in:
#             users = json.load(f_in)

#         active_user_lines = []
        
#         for user in users:
            
#             if user.get('status') == 'active':
        
#                 user_line = f"{user.get('name', 'N/A')} - {user.get('email', 'N/A')}"
#                 active_user_lines.append(user_line)

#         with open(output_txt, 'w') as f_out:
#             f_out.write('\n'.join(active_user_lines))

#             print(f"Амжилттай: {output_txt} файл үүслээ.")

#     except FileNotFoundError:
#         print(f"АЛДАА: {input_json} файл олдсонгүй.")
#     except Exception as e:
#         print(f"Ямар нэг алдаа гарлаа: {e}")

# if __name__ == "__main__":
#     filter_active_users('users.json', 'active_users.txt')


#4
# import random

# def guess_the_number():
#     secret_number = random.randint(1, 100)
#     print("Би 1-ээс 100-ийн хооронд нэг тоо нууцаар 'санлаа'.")
#     print("Та тааж чадах уу?")
    
#     attempts = 0

#     while True:
#         guess_str = input("Таны таамаг: ")

        
        
#         # 1. Try/Except ашиглан тоо биш оролтыг шалгах
#         try:
#             guess_num = int(guess_str)
#             attempts += 1
#         except ValueError:
#             print("Буруу! Та зөвхөн тоо оруулах ёстой!")
#             continue # Давталтын дараагийн алхам руу шилжих
            
#         # 2. Таамгийг шалгах
#         if guess_num < 1 or guess_num > 100:
#             print("Буруу! Таны тоо 1-100 хооронд байх ёстой.")
#         elif guess_num < secret_number:
#             print("Таны тоо хэт бага байна! Дээшлүүл.")
#         elif guess_num > secret_number:
#             print("Таны тоо хэт их байна! Доошлуул.")
#         else:
#             # 3. Зөв таасан үед давталтыг зогсоох
#             print(f"🎉 Баяр хүргэе! Та {secret_number} тоог {attempts} оролдлогоор зөв таалаа!")
#             break

# # --- Үндсэн ажиллагаа ---
# if __name__ == "__main__":
#     guess_the_number()

# #5

def remove_section(my_list, start_index, end_index):
    """
    Жагсаалтын start_index-ээс end_index хүртэлх хэсгийг
    (end_index-г оруулахгүйгээр) устгасан шинэ жагсаалт буцаана.
    """
    
    # 1. Эхлэлийн индекс хүртэлх хэсэг
    # Жишээ: [1, 2, 3]
    part1 = my_list[:start_index]
    
    # 2. Төгсгөлийн индексээс хойшх хэсэг
    # Жишээ: [8, 9, 10]
    part2 = my_list[end_index:]
    
    # 3. Хоёр хэсгийг нийлүүлэх
    return part1 + part2

# --- Үндсэн ажиллагаа ---
if __name__ == "__main__":
    my_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    print(f"Анхны жагсаалт:     {my_data}")
    
    # 3-р индекс (тоо 4) -ээс 7-р индекс (тоо 8) хүртэл устгах
    # (Индекс 3, 4, 5, 6 буюу 4, 5, 6, 7 гэсэн тоонууд устгагдана)
    new_data = remove_section(my_data, 3, 7) 
    
    print(f"3-аас 7-г устгасан: {new_data}")

    # 5-р индекс (тоо 6) -аас төгсгөл хүртэл устгах
    new_data_2 = remove_section(my_data, 5, len(my_data))
    print(f"5-аас төгсгөл хүртэл: {new_data_2}")


    