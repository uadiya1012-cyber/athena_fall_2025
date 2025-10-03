#1
# for i in range(1, 6):
#     print(i)

#2
# fruits = ["Apple", "Banana", "Orange"]
# for i in fruits:
#     print(i)

#3
# word = "Сайн"
# for i in word:
#     print(i)

#4
# for i in range(5, 0, -1):
#     print(i)

#5
# for i in range(1, 11):
#     if i % 2 == 0:
#         print(i)

#6
# word = "Бат"
# for i in word:
#     print(i)

# #7
# colors = ["Red", "Blue", "Green"]
# my_fav_col = f"Би {colors[0]} өнгөнд дуртай, мөн {colors[2]} өнгөнд дуртай"
# print(my_fav_col)

#8
# scores = [1, 2, 3, 4, 5]
# total_score = 0
# for score in scores:
#     total_score = total_score + score 
#     print(f"Нийт оноо {total_score} ")

#9
# items = ["Талх", "Сүү", "Өндөг", "Бяслаг"]
# count = 0
# for i in items:
#     count = count + 1
# print("Жагсаалтад", count, "зүйл байна.")

#10
# numbers = [10, 20, 30]
# doubled_numbers = []
# for i in numbers:
#     doubled_numbers.append(i * 2)
# print(doubled_numbers)

#11
# names = ["Ану", "Болд", "Ариун"]
# for name in names:
#     if name.startswith("А"):
#         print(name)

#12
# words = ["сайн", "байна", "уу"]
# total_length = 0
# for i in words:
#     total_length = total_length + len(i)
# print(f"Нийт үсгийн тоо: , {total_length}")

#13
# scores = [75, 92, 81, 60, 88]
# high_scores_count = 0
# for i in scores:
#     if i > 80:
#         high_scores_count = high_scores_count + 1
# print(f"80-аас доош оноотой сурагчдын тоо: {high_scores_count} ")

#14
# shopping_list = ["Алим", "Талх"]
# new_item = input("Жагсаалтад ямар зүйл нэмэх вэ? ")
# shopping_list.append(new_item)
# print(f"Таны шинэ жагсаалт:")
# for i in shopping_list:
#           print(i)

#15
# numbers = [12, 45, 8, 29, 50, 19]
# max_number = 0
# for i in numbers:
#     if i > max_number:
#         max_number = i
# print(f"Хамгийн их тоо:, {max_number} ")

#16
# numbers = [12, 45, 8, 29, 50, 19]
# min_number = numbers[0]
# for i in numbers:
#     if i < min_number:
#         min_number = i
# print(f"Хамгийн бага тоо:, {min_number}")        

#17
# words = ["ном", "компьютер", "үзэг", "дэвтэр"]
# long_words = []
# for i in words:
#     if len(i) > 4:
#         long_words.append(i)
# print(f"Урт үгс: {long_words}")

#18
# sentence = "Би програмчлалд суралцаж байна"
# space_count = 0
# for char in sentence:
#     if char == " ":
#         space_count = space_count + 1
# print(f"Зайны тоо: {space_count}")

#19
# text = "hello"
# characters = list(text)
# reversed_text = ""
# for character in characters:
#     reversed_text = character + reversed_text
# print(f"{reversed_text}")

#20
# items = ["алим", "гадил", "жүрж"]
# item_to_find = "aaa"
# found = False
# for i in items:
#     if i == item_to_find:
#         found = True
#         break
# if found is True:
#     print("Олдлоо")
# else:
#     print("Олдсонгүй")