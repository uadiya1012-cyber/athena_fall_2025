
import psycopg2
from psycopg2 import Error

DB_CONFIG = {
    "host": "localhost",
    "database": "session_35",
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
    
def creat_table():
    conn = get_db_connection()
    create_table_query = """
        CREATE TABLE IF NOT EXISTS products (
            id serial primary key,
            name varchar(100) not null,
            price integer unique not null
            );
    """
    try:
        with conn.cursor() as cur:
            cur.execute(create_table_query)
            conn.commit()
            print("Table was created successfully.")
    
    except psycopg2.DatabaseError as e:
        print(f"Error during creating database : {e}")
        conn.rollback()

def add_new_product(name, price):
    conn = get_db_connection()
    name = input("Барааны нэрээ оруулна уу: ")
    price = int(input("Үнээ оруулна уу: "))
    insert_query = "INSERT INTO products (name, price) " \
    "VALUES (%s, %s);"

    try:
        with conn.cursor() as cur:
            cur.execute(insert_query, (name, price))
            conn.commit()
            print("Бараа амжилттай нэмэгдлээ!")

    except psycopg2.DatabaseError as e:
        conn.rollback()
        print(f"Бараа нэмэх үед алдаа гарлаа {e}")

def view_all_products():
    conn = get_db_connection()
    view_query = "select * from products;"
    try:
        with conn.cursor() as cur:
            cur.execute(view_query)
            products = cur.fetchall()
            for product in products:
                print(product)
       
    except psycopg2.DatabaseError as e:
        conn.rollback()
        print(f"Хэвлэх явцад алдаа заалаа: {e}")

def find_product_by_id(id):
    conn = get_db_connection()
    find_query = "select * from products where id = %s;"
    try:
        with conn.cursor() as cur:
            cur.execute(find_query, (id))
            products = cur.fetchone()
            print(products)

    except psycopg2.DatabaseError as e:
        conn.rollback()
        print(f"ID хайх үед алдаа заалаа: {e}")

def update_product(id, new_price):
    conn = get_db_connection()
    update_query = "update products set price = %s where id = %s;"
    try:
        with conn.cursor() as cur:
            cur.execute(update_query, (new_price, id))
            conn.commit()
            print("Амжилттай шинчлэгдлээ")

    except psycopg2.DatabaseError as e:
        conn.rollback
        print(f"Үнэ шинчлэх үед алдаа гарлаа {e}")

def delete_product(deleted_id):
    conn = get_db_connection()
    deleted_query = "delete from products where id = %s;"
    try:
        with conn.cursor() as cur:
            cur.execute(deleted_query, (deleted_id))
            conn.commit()
            print("Амжилттай устгагдлаа")

    except psycopg2.DatabaseError as e:
        conn.rollback
        print(f"Устгах үед алдаа гарлаа: {e}")

def show_product_report_with_join():
    conn = get_db_connection()
    create_table_query = """
        CREATE TABLE IF NOT EXISTS report_products (
            id serial primary key,
            name varchar(100) not null,
            price integer unique not null
            );
    """
    try:
        with conn.cursor() as cur:
            cur.execute(create_table_query)
            conn.commit()
            print("Table was created successfully.")
    
    except psycopg2.DatabaseError as e:
        print(f"Error during creating database : {e}")
        conn.rollback()

def join_tables():
    conn = get_db_connection()
    join_query = """
        select * from products p
        join report_products r
        on p.id = r.id;
    """
    try:
        with conn.cursor() as cur:
            cur.execute(join_query)
            conn.commit
            print("Хоёр хүснэгт холболгдлоо")

    except psycopg2.DatabaseError as e:
        print(f"Холбох үед алдаа гарлаа: {e}")
        conn.rollback()



    

    
    
            

