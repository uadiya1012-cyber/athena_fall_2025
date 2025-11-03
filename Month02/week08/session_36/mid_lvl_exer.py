#1
# def check_expensive_items(expenses, limit):
#     print(f"-- {limit}₮-өөс үнэтэй зүйлс ---")
    
#     for item, price in expenses.items():
#         if price > limit:
#             print(f"- {item} ({price}₮)")

# monthly_expenses = {
#     "Кофе": 4500,
#     "Талх": 2000,
#     "Түрээс": 800000,
#     "Утасны төлбөр": 35000
# }

# check_expensive_items(monthly_expenses, 30000)

#2
# def count_vowels(text):
#     counts = {}
#     vowels = "aeiou"

#     for char in text:
#         if char in vowels:
#             counts[char] = counts.get(char, 0) + 1
#             print(counts)
# count_vowels("Programming is Fun")

#3
# def check_low_stock(products, threshold):
#     print(f"-- Нөөц {threshold}-аас бага байгаа бараанууд ---")
#     for product in products:
#         if product['stock'] < threshold:
#             print(f"- {product['name']} ({product['stock']} ширхэг)")

# inventory = [
#     {'name': 'Талх', 'stock': 5},
#     {'name': 'Өндөг', 'stock': 12},
#     {'name': 'Сүү', 'stock': 2}
# ]

# check_low_stock(inventory, 7)

#4
# def reverse_count(start_num):
#     print("-- Урвуу тоолол ---")
#     for i in range(10, 0, -1):
#         if i % 3 == 0:
#             print("SKIP")
#         else:
#             print(i)
# reverse_count(10)

#5
# def has_duplicates(word):
#     for char in word:
#         return len(char) != len(set(char))

# word1 = "номин"
# word2 = "сарнай"
# print(f"'{word1}' давхардалтай юу? {has_duplicates(word1)}")
# print(f"'{word2}' давхардалтай юу? {has_duplicates(word2)}")