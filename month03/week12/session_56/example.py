# Жирийн функц vs Lambda
# ============================================# ЖИРИЙН ФУНКЦ# ============================================
def square(x):
    return x ** 2

print(square(5))  # 25# ============================================# LAMBDA ХУВИЛБАР (яг ижил үйлдэл)# ============================================
square_lambda = lambda x: x ** 2

print(square_lambda(5))  # 25



# Олон параметртэй Lambda
# Хоёр параметр
add = lambda a, b: a + b
print(add(3, 4))  # 7# Гурван параметр
multiply = lambda a, b, c: a * b * c
print(multiply(2, 3, 4))  # 24# Тэмдэгт мөр холбох
full_name = lambda first, last: f"{first} {last}"
print(full_name("Бат", "Дорж"))  # Бат Дорж



# Нөхцөлтэй Lambda (Ternary Operator)
# Тэгш/Сондгой шалгах
is_even = lambda x: "Тэгш" if x % 2 == 0 else "Сондгой"
print(is_even(7))  # Сондгой
print(is_even(8))  # Тэгш# Тэнцсэн эсэх
grade = lambda score: "Тэнцсэн" if score >= 60 else "Тэнцээгүй"
print(grade(75))  # Тэнцсэн
print(grade(45))  # Тэнцээгүй# Хамгийн их утга
max_val = lambda a, b: a if a > b else b
print(max_val(10, 25))  # 25



# Хэзээ Lambda ашиглах вэ?
# ✅ Зөв: Богино, нэг удаа ашиглах функц
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))

# ❌ Буруу: Нарийн төвөгтэй логик
# Lambda-д олон мөрийн код бичиж болохгүй
# Ийм үед def ашиглах нь дээр

# map() Практик жишээнүүд
# --- Температур хөрвүүлэх (Celsius -> Fahrenheit) ---
celsius = [0, 10, 20, 30, 40]
fahrenheit = list(map(lambda c: (c * 9/5) + 32, celsius))
print(fahrenheit)  
# [32.0, 50.0, 68.0, 86.0, 104.0]
# --- Нэрсийг том үсгээр бичих ---
names = ["бат", "дорж", "оюун"]
capitalized = list(map(lambda name: name.capitalize(), names))
print(capitalized)  
# ['Бат', 'Дорж', 'Оюун']
# --- Тоонуудыг тэмдэгт мөр болгох ---
numbers = [1, 2, 3, 4, 5]
strings = list(map(str, numbers))
print(strings)  
# ['1', '2', '3', '4', '5']
# --- Урт олох ---
words = ["hello", "world", "python"]
lengths = list(map(len, words))
print(lengths)  # [5, 5, 6]



# Хоёр жагсаалт дээр map()
# Үнэ * тоо ширхэг = нийт дүн
prices = [100, 200, 300]
quantities = [2, 3, 1]
totals = list(map(lambda p, q: p * q, prices, quantities))
print(totals)  
# [200, 600, 300]
# Хоёр жагсаалтыг нэмэх
list1 = [1, 2, 3]
list2 = [10, 20, 30]
sums = list(map(lambda a, b: a + b, list1, list2))
print(sums)  
# [11, 22, 33]


## 🐍 3. filter() функц

### filter() гэж юу вэ?

# `filter()` функц нь нөхцөл хангасан элементүүдийг **шүүж** авна. Функц нь `True` буцаасан элементүүдийг л үлдээнэ.

# Уламжлалт арга vs filter()
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# ============================================
# УЛАМЖЛАЛТ АРГА (for loop + if)
# ============================================
evens_loop = []
for n in numbers:
    if n % 2 == 0:
        evens_loop.append(n)
print(evens_loop)  
# [2, 4, 6, 8, 10]
# ============================================
# FILTER() АШИГЛАХ
# ============================================
evens_filter = list(filter(lambda x: x % 2 == 0, numbers))
print(evens_filter)  
# [2, 4, 6, 8, 10]

# filter() Практик жишээнүүд
# --- Тэнцсэн оюутнуудыг шүүх ---
scores = [45, 78, 52, 90, 38, 65, 88]
passed = list(filter(lambda x: x >= 60, scores))
failed = list(filter(lambda x: x < 60, scores))
print(f"Тэнцсэн: {passed}")   
# [78, 90, 65, 88]
print(f"Тэнцээгүй: {failed}") 
# [45, 52, 38]
# --- Эерэг тоонуудыг шүүх ---
mixed = [-5, 3, -2, 8, -1, 0, 7]
positives = list(filter(lambda x: x > 0, mixed))
print(positives)  
# [3, 8, 7]
# --- Хоосон биш string шүүх ---
words = ["hello", "", "world", "", "python"]
non_empty = list(filter(lambda x: len(x) > 0, words))
print(non_empty)  
# ['hello', 'world', 'python']
# --- Тодорхой урттай үгс ---
animals = ["cat", "elephant", "dog", "hippopotamus", "ant"]
long_names = list(filter(lambda x: len(x) > 4, animals))
print(long_names)  
# ['elephant', 'hippopotamus']


## 🐍 4. map() + filter() хослуулах

# Эхлээд `filter()`-ээр шүүж, дараа нь `map()`-ээр боловсруулах нь түгээмэл хэв маяг юм.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# --- Тэгш тоонуудыг шүүж, квадрат болгох ---
# Алхам 1: Тэгш тоонуудыг шүүх
# Алхам 2: Квадрат болгох
result = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numbers)))
print(result)  
# [4, 16, 36, 64, 100]
# --- Эерэг тоонуудыг 2-оор үржүүлэх ---
mixed = [-3, 5, -1, 8, -4, 2]
result = list(map(lambda x: x * 2, filter(lambda x: x > 0, mixed)))
print(result)  
# [10, 16, 4]

# Бодит жишээ: Оюутны систем
students = [
    {"name": "Бат", "score": 85},
    {"name": "Дорж", "score": 45},
    {"name": "Оюун", "score": 92},
    {"name": "Сараа", "score": 58},
    {"name": "Болд", "score": 73},
]

# Тэнцсэн оюутнуудын нэрийг авах
passed_names = list(map(
    lambda s: s["name"],
    filter(lambda s: s["score"] >= 60, students)
))
print(passed_names)  
# ['Бат', 'Оюун', 'Болд']
# Бүх оюутны оноог 5-аар нэмэх
curved_scores = list(map(
    lambda s: {"name": s["name"], "score": s["score"] + 5},
    students
))
print(curved_scores)