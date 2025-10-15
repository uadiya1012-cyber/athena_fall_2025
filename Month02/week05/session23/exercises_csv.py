#1
# import csv
# with open('employees.csv', 'r', encoding='utf-8') as file:
#     csv_reader = csv.reader(file)

#     next(csv_reader)

#     print("--- employees information ---")
#     for row in csv_reader:
#         name = row[0]
#         department = row[1]
#         salary = row[2]
#         print(row)

#2
# import csv
# with open('employees.csv', 'r', encoding='utf-8') as file:
#     salary_calculate = csv.reader(file)

#     next(salary_calculate)

#     sum = 0
#     for row in salary_calculate:
#         salary = int(row[2])
#         sum += salary
#     print(sum)

#3

# import csv
# with open('employees.csv', 'r', encoding='utf-8') as file:
#     find_developers = csv.DictReader(file)
    
#     next(find_developers)
    
#     for row in find_developers:
#         if row["department"] == "Хөгжүүлэлт":
#             print(row["name"])

#4
# import csv
# with open('students.csv', 'r', encoding='utf-8') as file:
#     calculate_average_age = csv.DictReader(file)
#     ages = []

#     next(calculate_average_age)

#     for row in calculate_average_age:
#         ages.append(int(row['age']))
        
# average_age= sum(ages) / len(ages)
# print(average_age)

#5
# import csv
# with open('products.csv', 'r', encoding='utf-8') as file:
#     expensive_product = csv.DictReader(file)
#     max_product = None
#     max_price = 0

    

#     for row in expensive_product:
#         price = int(row['price'])
#         if price > max_price:
#             max_price = price
#             max_product = row['product_name']

# print(f"Хамгийн үнэтэй бүтээгдэхүүн: {max_product} ({max_price}₮)")





        

    



        

