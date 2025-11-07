# Python Exercises

#1

# def merge_dicts(dict1, dict2):
#     dict3 = {}
#     dict3 = {**dict1, **dict2}
#     print(dict3)

# d1 = {'a': 1, 'b': 2}
# d2 = {'a': 1, 'b': 3, 'c': 4}
# merge_dicts(d1, d2)

#2

# def find_duplicates(items_list):
#     find = set()
#     duplicates = set() 
#     for item in items_list:
#         if item in find:
#             duplicates.add(item)
#         else:
#             find.add(item)
#     return list(duplicates)

# items = [1, 2, 3, 2, 4, 5, 5, 6]
# dups = find_duplicates(items)
# print(dups)

#3

# import string
# def analyze_text(filename):

#     try:
#         with open(filename, 'r') as file:
#             content = file.read()
#         characters = len(content)
#         words = len(content.split())
#         lines = len(content.splitlines())

#         return {
#             'characters': characters,
#             'words': words,
#             'lines': lines
#         }
#     except FileNotFoundError:
#         print(f"Алдаа {filename} олдсонгүй")
#         return None
    
# stats = analyze_text('my_file.txt')
# print(stats)

#4

# def count_vowels(text):
#     vowels = "aeiouAEIOU"
#     counts = {}
#     for char in text.lower():
#         if char in vowels:
#             counts[char] = counts.get(char, 0) + 1
#     return counts
# text = "Hello World, this is an Example."
# counts = count_vowels(text)
# print(counts)

#5

# def get_top_scores(score_list):
#     max_scores = {}
    
#     for name, score in score_list:
#         if name not in max_scores or score > max_scores[name]:
#             max_scores[name] = score

#     sorted_score = sorted(max_scores.items(), key=lambda x: x[1], reverse=True)

#     return sorted_score[:3]


# scores = [('Alice', 88), ('Bob', 95), ('Charlie', 76), ('Bob', 105), ('Alice', 92)]
# top_3 = get_top_scores(scores)
# print(top_3)





