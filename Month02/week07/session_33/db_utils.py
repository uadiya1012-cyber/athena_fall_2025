import psycopg2
from psycopg2 import Error

DB_CONFIG = {
    "host": "localhost",
    "database": "session_33",
    "user": "postgres",
    "password": ''
}

def get_db_connection():
    connection = None
    try:
        connection = psycopg2.connect(**DB_CONFIG)
        return connection
    except Error as e:
        print(f"Error during database connection {e}")
        return None
    
from db_utils import get_db_connection
def get_all_products_as_dict():
    conn = get_db_connection()
    products_list = []
    ALL_PRODUCTS_QUERY = 'select * from products;'
    if conn:
    
        with conn.cursor() as cur:
            cur.execute(ALL_PRODUCTS_QUERY)

            all_rows = cur.fetchall()
            for row in all_rows:
                product = {
                    "id": row[0],
                    "name": row[1],
                    "price": row[2]  
                }
                products_list.append(product) 
    
    
        cur.close()
        conn.close()

    return products_list

# products = get_all_products_as_dict()
# print(products)
    

def find_products_above_price():
    min_price_str = input("Хамгийн бага үнийн дүнг оруул: ")
    min_price = int(min_price_str)
    sql = "select * from products where price > %s;"
    conn = get_db_connection()

    if conn:
        with conn.cursor() as cur:
            cur.execute(sql, (min_price,))
            products = cur.fetchall()
            for p in products:
                print(f"- {p[1]} ({p[2]}₮)")
       
        cur.close()
        conn.close()

from db_utils import get_db_connection
from psycopg2 import Error

def add_multiple_products(products_to_add):
    # TODO
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor()
        try:
            # executemany нь list доторх tuple бүрийн хувьд query-г ажиллуулна
            # TODO
            print(f"✅ {len(products_to_add)} ширхэг бүтээгдэхүүн амжилттай нэмэгдлээ.")
        except Error as e:
            print(f"❌ Алдаа: {e}")
        finally:
            cursor.close()
            conn.close()

new_items = [
    ("Бяслаг", 8000),
    ("Ундаа", 2500)
]
# add_multiple_products(new_items)

# from db_utils import get_db_connection

# def get_product_count():
#     # TODO
#     # TODO
#     if conn:
#         # TODO # Үр дүн (5,) гэх мэт tuple-ийн 0-р элементийг авна
#         print(f"Мэдээллийн санд нийт {count} бүтээгдэхүүн байна.")
#         cursor.close()
#         conn.close()

# get_product_count()

# from db_utils import get_db_connection

# def search_product_by_name():
#     search_term = input("Хайх бүтээгдэхүүний нэр: ")
#     # % тэмдэгтүүдийг python дотор нэгтгэж өгөх нь илүү аюулгүй
#     sql_pattern = f"%{search_term}%"

#     # TODO
#     # TODO
#     if conn:
#         # TODO
#         # TODO
#         results = cursor.fetchall()

#         if results:
#             print(f"--- '{search_term}' агуулсан үр дүн ---")
#             # TODO
#         else:
#             print("Тохирох үр дүн олдсонгүй.")
#         cursor.close()
#         conn.close()

# search_product_by_name()

def main_menu():
    while True:
        print("\n--- Үндсэн цэс ---")
        print("1. Шинэ бүтээгдэхүүн нэмэх")
        print("2. Бүх бүтээгдэхүүн харах")
        print("3. Гарах")
        choice = input("Сонголтоо хийнэ үү: ")

        if choice == '1':
            print("... Нэмэх үйлдэл хийгдэнэ ...")
            return 1
        elif choice == '2':
            print("... Харах үйлдэл нэмэх ...")
            return 2
        elif choice == '3':
            print("Баяртай")
            break
        else:
            print("Буруу сонголт дахин оролдоно уу!")

    

        
def main():
     find_products_above_price()
     new_items = [
         ("Бяслаг", 8000),
         ("Ундаа", 2500)
     ]
     add_multiple_products(new_items)
     choice = main_menu()
     if choice == 2:
         result = get_all_products_as_dict()
         print(result)

if __name__ == '__main__':
     main()