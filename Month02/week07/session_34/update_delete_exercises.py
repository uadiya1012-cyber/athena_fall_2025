from db_utils import get_db_connection
from psycopg2 import Error

#1
# def update_product_price(product_id, new_price):
#     conn = get_db_connection()
#     if conn:
#         try:
#             cur = conn.cursor()
#             update_query = "update products set price = %s where id = %s;"
#             cur.execute(update_query, (new_price, product_id))
#             conn.commit()
#             print(f"ID {product_id} дугаартай бүтээгдэхүүн амжилттай шинчлэгдлээ")
#         except Error as e:
#             print(f"Шинчлэлт хийх үед алдаа гарлаа: {e}")
#             return None
#         finally:
#             cur.close()
#             conn.close()

# update_product_price(1, 6000000)


#2
# def delete_product_by_id(product_id):
#     conn = get_db_connection()
#     if conn:
#         try:
#             cur = conn.cursor()
#             delete_query = "delete from products where id = %s;"
#             cur.execute(delete_query, (product_id,))
#             conn.commit()
#             print(f"ID {product_id}-тай бүтээгдэхүүн амжилттай устгагдлаа.")
#         except Error as e:
#             print(f"Устгал хийх үед алдаа гарлаа: {e}")
#             return None
#         finally:
#                 cur.close()
#                 conn.close()
# delete_product_by_id(3)

#3
# def update_product_details(product_id, new_name, new_price):
#     conn = get_db_connection()
#     if conn:
#         try:
#             cur = conn.cursor()
#             query = "update products set name = %s, price = %s where id = %s;"
#             cur.execute(query, (new_name, new_price, product_id))
#             conn.commit()
#             print(f" ID {product_id}-тай бүтээгдэхүүний мэдээлэл шинэчлэгдлээ.")
#         except Error as e:
#             print(f"Алдаа: {e}")
#         finally:
#             cur.close()
#             conn.close()

# update_product_details(2, "New PC", 2200000)

#4
# def delete_product_by_name(name):
#     conn = get_db_connection()
#     if conn:
#         try:
#             cur = conn.cursor()
#             query = "delete from products where name = %s;"
#             cur.execute(query, (name,))
#             conn.commit()
#             print(f"{name} бүтээгдэхүүн устгагдлаа.")
#         except Error as e:
#             print(f"Алдаа: {e}")
#         finally:
#             cur.close()
#             conn.close()

# delete_product_by_name("iwatch")

#5
# def apply_discount(percentage):
#     conn = get_db_connection()
#     if conn:
#         try:
#             discount = 1.0 - percentage / 100.0
#             query = "update products set price = price * %s;"
#             cur = conn.cursor()
#             cur.execute(query, (discount,))
#             conn.commit()
#             print(f"Бүх бүтээгдэхүүний үнэ {percentage}% хямдарлаа.")
#         except Error as e:
#             print(f"Алдаа: {e}")
#         finally:
#             cur.close()
#             conn.close()
# apply_discount(10)

#6
# def delete_by_category(category_name):
#     conn = get_db_connection()
#     if conn:
#         try:
#             cur = conn.cursor()
#             query = "delete from products where category = %s;"
#             cur.execute(query, (category_name,))
#             conn.commit()
#             print(f"{category_name} ангиллын бүтээгдэхүүн устагдлаа.")
#         except Error as e:
#             print(f"Алдаа {e}")
#         finally:
#             cur.close()
#             conn.close()

# delete_by_category("computer")

#7

# def update_product_price_interactive():
#     product_id = int(input("Засварлах бүтээгдэхүүний ID: "))
#     new_price = int(input("Шинэ үнийг оруулна уу: "))
#     update_product_price(product_id, new_price)
# update_product_price_interactive()

#8
# def delete_product_interactive():
#     product_id = int(input("Устгах бүтээгдэхүүний ID: "))
#     delete_product_by_id(product_id)
# delete_product_interactive()

#9
# def delete_product_by_id_safe(product_id):
#     conn = get_db_connection()
#     if conn:
#         try:
#             cur = conn.cursor()
#             delete_query = "delete from products where id = %s;"
#             cur.execute(delete_query, (product_id,))
#             conn.commit()
#             if cur.rowcount == 0:
#                  print(f"{product_id} ID-тай бүтээгдэхүүн олдсонгүй.")
#             else:
#                 print(f"ID {product_id}-тай бүтээгдэхүүн амжилттай устгагдлаа.")
#         except Error as e:
#             print(f"Устгал хийх үед алдаа гарлаа: {e}")
#             return None
#         finally:
#                 cur.close()
#                 conn.close()
# delete_product_by_id_safe(2)

#10
# def update_product_from_dict(product_dict):
#     conn = get_db_connection()
#     if conn:
#         try:
#             cur = conn.cursor()
#             query = "update products set name = %s, price = %s where id = %s"
#             cur.execute(query, (product_dict["name"], product_dict["price"], product_dict["id"]))
#             conn.commit()
#             print(f"ID {product_dict['id']}-тай бүтээгдэхүүн амжилттай шинэчлэгдлээ.")
#         except Error as e:
#             print(f"Алдаа: {e}")
#         finally:
#             cur.close()
#             conn.close()
# product_update = {"id": 1, "name": "Шинэ Алим", "price": 3800}
# update_product_from_dict(product_update)





