# exercise1
# numbers = [1, 2, 3, 4, 5]
# result = list(map(lambda x: x**3, numbers))
# print(result)

# exercise2
# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# result = list(filter(lambda x: x % 2 != 0, numbers))
# print(result)

# exercise3
# names = ["бат", "дорж", "оюун", "сараа"]
# result = list(map(lambda x: x.upper(), names))
# print(result)

# exercise4
# numbers = [-5, 3, -2, 8, 0, -1, 7, -4, 10]
# result = list(filter(lambda x: x > 0, numbers))
# print(result)

# exercise5
# prices = [1000, 2500, 500, 3000, 1500]
# result = list(map(lambda p: p * 0.8, prices))
# print(result)

# exercise6
# names = ["Бат", "Болормаа", "Дорж", "Оюунцэцэг", "Од", "Сараа"]
# result = list(filter(lambda n: len(n) >= 5, names))
# print(result)

# exercise7
# celsius = [-10, 0, 15, 25, 37, 100]
# result = list(map(lambda c: (c * 9/5) + 32, celsius))
# print(result)

# exercise8
# students = [
#     {"name": "Бат", "score": 85},
#     {"name": "Дорж", "score": 45},
#     {"name": "Оюун", "score": 92},
#     {"name": "Сараа", "score": 58},
#     {"name": "Болд", "score": 73},
#     {"name": "Түмэн", "score": 39},
# ]

# result = list(map(lambda s: s["name"],
#                   filter(lambda x: x["score"] >= 60, students)))

# print(result)

# exercise9
# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# result = list(map(lambda x: x**2,
#                   filter(lambda n: n % 2 == 0, numbers)))

# print(result)

# exercise10
products = [
    {"name": "Laptop", "price": 2500000, "in_stock": True},
    {"name": "Mouse", "price": 45000, "in_stock": False},
    {"name": "Keyboard", "price": 120000, "in_stock": True},
    {"name": "Monitor", "price": 650000, "in_stock": True},
    {"name": "Headphones", "price": 180000, "in_stock": False},
    {"name": "Webcam", "price": 95000, "in_stock": True},
]

result = list(map(
    lambda p: {"name": p["name"], "discounted_price": p["price"] * 0.9},
    filter(lambda item: item["in_stock"] == True, products)
))

print(result)





