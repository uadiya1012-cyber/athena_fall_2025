# Python and PostgreSQL exercises

#1
# def filter_expensive_products(product_list, min_price):
#     print(f"--- {min_price}₮-өөс үнэтэй бүтээгдэхүүнүүд ---")
    
#     for product in product_list:
#         product_id, product_name, price = product
#         if price > min_price:
#             print(f"{product_name}: {price}₮")

# all_products = [(1, 'Алим', 3500), (2, 'Сүү', 4200), (3, 'Талх', 2000)]
# filter_expensive_products(all_products, 3000)

#2

# def print_product_details(product_dict):
#     print("--- Бүтээгдэхүүний дэлгэрэнгүй ---")
#     for key, value in product_dict.items():
#         print(key, value)
    
# product = {"name": "Laptop", "price": 2500000, "in_stock": True}
# print(print_product_details(product))

#3

# def get_unique_categories(category_list):
    
#     res = list(set(category_list))
#     return res
# categories = ["fruits", "milk", "bread", "fruits", "milk", "vegetables"]
# unique = get_unique_categories(categories)
# print(f"Өвөрмөц ангиллууд: {unique}")

#4
# def find_product(products, name_to_find):
#     for product in products:
#         if product["name"] == name_to_find:
#             return product
        
# product_list = [
#     {"name": "apple", "price": 3500},
#     {"name": "bread", "price": 2000}
# ]
# print(find_product(product_list, "bread"))










# def main_menu():
#     pass

