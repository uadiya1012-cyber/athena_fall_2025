import psycopg2
from psycopg2 import Error
import os

DB_CONFIG = {
    "host": "localhost",
    "database": "session_32",
    "user": "postgres",
    "password": ''
}

def get_db_connection():
    conn = None
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        return conn
    except psycopg2.DatabaseError as e:
        print(f"Error during database connection {e}")
        return None
    
def add_product(name, price):
    conn = get_db_connection()
    if conn:
        cursor = None
        try:
            cursor = conn.cursor()
            query = "insert into products (name, price) values (%s, %s);"
            cursor.execute(query, (name, price))
            conn.commit()
            print(f"'{name}' бүтээгдэхүүн амжилттай нэмэгдлээ.")
        except Error as e:
            print(f" Өгөгдөл нэмэх үед алдаа гарлаа: {e}")
        finally:
            if cursor: cursor.close()
            if conn: conn.close()

def get_all_products():
    conn = get_db_connection()
    if conn:
        cursor = None
        try:
            cursor = conn.cursor()
            query = "select * from products;"
            cursor.execute(query)
            products = cursor.fetchall()
            return products
        except Error as e:
            print(f" Өгөгдөл унших үед алдаа гарлаа: {e}")
        finally:
            if cursor: cursor.close()
            if conn: conn.close()
    return []


def get_product_by_id(product_id):
    conn = get_db_connection()
    if conn:
        cursor = None
        try:
            cursor = conn.cursor()
            query = "select * from products where id = %s;"
            cursor.execute(query, (product_id,))
            product = cursor.fetchone()
            return product
        except Error as e:
            print(f" Өгөгдөл хайх үед алдаа гарлаа: {e}")
        finally:
            if cursor: cursor.close()
            if conn: conn.close()

    return None

if __name__ == "__main__":

    print("--- ШИНЭЭР НЭМЭХ ---")
    add_product("Алим", 3500)
    add_product("Талх", 2000)
    add_product("Сүү", 4200)

    print("\n--- БҮХ БҮТЭЭГДЭХҮҮН ХАЙХ (fetchall) ---")
    all_product = get_all_products()
    for prod in all_product:
        print(prod)


    print("\n--- НЭГ БҮТЭЭГДЭХҮҮН ХАЙХ (fetchone) ---")
    product_to_find = 2
    found_product = get_product_by_id(product_to_find)
    if found_product:
        print(f"Олдсон бүтээгдэхүүн: {found_product}")
    else:
        print(f"{product_to_find} ID-тай бүтээгдэхүүн олдсонгүй.")