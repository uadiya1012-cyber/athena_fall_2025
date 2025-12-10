import json
import os

fileName = "students.json"

if os.path.exists(fileName):
    with open(fileName, "r", encoding="utf-8") as file:
        data = json.load(file)
    print(data)
    print("File read")
else:
    print("File not found!")
    data = []