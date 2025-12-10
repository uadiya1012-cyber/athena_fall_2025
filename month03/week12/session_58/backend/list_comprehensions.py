numers = [1, 2, 3, 4, 5]
squared = []
for n in numers:
    squared.append(n**2)
print(squared)

squared2 = [n**2 for n in numers]
print(squared2)

evens = [n for n in numers if n % 2 == 0]
print(evens)

labels = ["even" if n % 2 == 0 else "odd" for n in numers]
print(labels)

pairs1 = []
for x in [1, 2, 3]:
    for y in ["a", "b"]:
        pairs1.append((x, y))
print(pairs1)

pairs2 = [(x, y) for x in [1, 2, 3] for y in ["a", "b"]]
print(pairs2)

names = ["bat", "bold", "saran"]
capitalized = [name.capitalize() for name in names]
print(capitalized)

def is_positive(x):
    return x > 0

numbers2 = [-2, 4, -8, 34, -9]
positives = [n for n in numbers2 if is_positive(n)]
print(positives)

students = [
    {"name": "Бат", "score": 85},
    {"name": "Дорж", "score": 45},
    {"name": "Оюун", "score": 92},
]

names = [s["name"] for s in students]
print(names)

passed = [s["name"] for s in students if s["score"] >= 60]
print(passed)

curved = [{"name": s["name"], "score": s["score"] + 5} for s in students]
print(curved)

numbers3 = [1, 2, 3, 4, 5]
squared_map = list(map(lambda x: x**2, numbers3))
print(squared_map)

squared_lc = [x**2 for x in numbers3]
print(squared_lc)