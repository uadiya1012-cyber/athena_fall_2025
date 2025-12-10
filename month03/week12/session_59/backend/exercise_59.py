# import requests
# from bs4 import BeautifulSoup
# import json

# Дасгал 1
# person = {
#     "name": "Бат",
#     "age": 25,
#     "city": "Улаанбаатар"
# }

# json_string = json.dumps(person, ensure_ascii=False)
# print(json_string)


# Дасгал 2
# json_string = '{"name": "Дорж", "age": 30, "job": "Программист"}'
# student = json.loads(json_string)
# print(student["name"])

# Дасгал 3
# fruits = ["Алим", "Жүрж", "Гэзэг", "Тарвас", "Үзэм"]
# with open("fruits.json", "w", encoding="utf-8") as file:
#     json.dump(fruits, file, ensure_ascii=False, indent=2)

# print("fruits.js файл үүслээ!")

# Дасгал 4
# with open("fruits.json", "r", encoding="utf-8") as file:
#     fruits = json.load(file)

# for i, fruit in enumerate(fruits, start=1):
#     print(f"{i}. {fruit}")

# Дасгал 5
# students = [
#     {"name": "Бат", "score": 85, "passed": True},
#     {"name": "Дорж", "score": 45, "passed": False},
#     {"name": "Оюун", "score": 92, "passed": True}
# ]
# with open("students.json", "w", encoding="utf-8") as f:
#     json.dump(students, f, ensure_ascii=False, indent=2)

# Дасгал 6
# with open("students.json", "r", encoding="utf-8") as f:
#     students = json.load(f)

# passed_students = [s["name"] for s in students if s["passed"]]
# print("Тэнцсэн оюутнууд:", passed_students)

# Дасгал 7
# new_student = {"name": "Сараа", "score": 78, "passed": True}
# with open("students.json", "r", encoding="utf-8") as f:
#     students = json.load(f)

# students.append(new_student)

# with open("students.json", "w", encoding="utf-8") as f:
#     json.dump(students, f, ensure_ascii=False, indent=2)

# print("Сараа нэмэгдлээ! Нийт", len(students), "оюутан байна.")

# Дасгал 8
# url = "https://quotes.toscrape.com"
# response = requests.get(url)
# print(response.status_code)
# if response.status_code == 200:
#     soup = BeautifulSoup(response.text, "html.parser") 

#     quote_elements = soup.find_all("div", class_="quote")

#     quotes = [
#         {
#             "text": quote.find("span", class_="text").text,
#             "author": quote.find("small", class_="author").text
#         }
#         for quote in quote_elements
#     ]

#     with open("quotes.json", "w", encoding="utf-8") as file:
#         json.dump(quotes, file, indent=2, ensure_ascii=False)

#     print(f"{len(quotes)} quotes have been written into quotes.json")


# Дасгал 9

# config = {
#     "app_name": "Миний Апп",
#     "version": "1.0.0",
#     "settings": {
#         "theme": "dark",
#         "language": "mn",
#         "notifications": True
#     },
#     "allowed_users": ["admin", "user1", "user2"]
# }

# with open("config.json", "w", encoding="utf-8") as f:
#     json.dump(config, f, ensure_ascii=False, indent=2)

# with open("config.json", "r", encoding="utf-8") as f:
#     data = json.load(f)

# print("Theme:", data["settings"]["theme"])
# print("Language:", data["settings"]["language"])

# Дасгал 10
# products = [
#     {"name": "Laptop", "price": 2500000, "quantity": 2},
#     {"name": "Mouse", "price": 45000, "quantity": 5},
#     {"name": "Keyboard", "price": 120000, "quantity": 3}
# ]

# with open("products.json", "w", encoding="utf-8") as f:
#     json.dump(products, f, ensure_ascii=False, indent=2)

# with open("products.json", "r", encoding="utf-8") as f:
#     data = json.load(f)

# total_sum = 0
# for p in data:
#     total = p["price"] * p["quantity"]
#     total_sum += total
#     print(f"{p["name"]}: {total:,}₮")

# print("---------------------")
# print(f"Нийт дүн: {total_sum:,}₮")

