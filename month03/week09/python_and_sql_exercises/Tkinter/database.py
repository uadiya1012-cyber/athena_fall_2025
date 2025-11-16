import psycopg2
from psycopg2 import Error
from psycopg2.extras import DictCursor

DB_CONFIG = {
    "host": "localhost",
    "database": "company",
    "user": "postgres",
    "password": "",
    "port": "5432"
}

def get_db_connection():
    
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        return conn
    except Error as e:
        print(f"Холболт хийх үед алдаа гарлаа: {e}")
        return None


def create_table_if_not_exists():
    sql = """
    create table if not exists employees(
        id serial primary key,
        first_name varchar(100),
        last_name varchar(100),
        email varchar(100) unique
    );
"""
    conn = get_db_connection()
    if not conn:
        return
        
    try:
        cur = conn.cursor()
        cur.execute(sql)
        conn.commit()
        print("Хүснэгт амжилттай үүслээ.")
    except Error as e:
        print(f"Хүснэгт үүсэх үед алдаа гарлаа: {e}")
    finally:
        cur.close()
        conn.close()


def fetch_employees():
    conn = get_db_connection()
    
    if not conn:
        return []
    
    try:
        sql = "select id, first_name, last_name, email from employees order by id"
        cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
        cur.execute(sql)
        rows = cur.fetchall()
        
        return[(row["id"], row["first_name"], row["last_name"], row["email"]) for row in rows]

    except Error as e:
        print(f"Ажилтан унших үед алдаа гарлаа: {e}")
        return []
    finally:
        cur.close()
        conn.close()


def add_employee(first_name, last_name, email):
    conn = get_db_connection()
    if not conn:
        return False
    
    sql = "insert into employees (first_name, last_name, email) values(%s, %s, %s)"

    try:
        cur = conn.cursor()
        cur.execute(sql, (first_name, last_name, email))
        conn.commit()
        return True
        
    except Error as e:
        print(f"Хэрэглэгч нэмэх үед алдаа гарлаа: {e}")
        return False
    finally:
        cur.close()
        conn.close()

def update_employee(id, first_name, last_name, email):
    conn = get_db_connection()
    if not conn:
        return False
    sql = "update employees set first_name = %s, last_name = %s, email = %s where id = %s"

    try:
        cur = conn.cursor()
        cur.execute(sql, (first_name, last_name, email, id))
        conn.commit()
        return True
    except Error as e:
        print(f"Шинчлэх үед алдаа гарлаа: {e}")
        return False
    finally:
        cur.close()
        conn.close()

def delete_employee(id):
    conn = get_db_connection()
    if not conn:
        return False
    sql = "delete from employees where id = %s"

    try:
        cur = conn.cursor()
        cur.execute(sql, (id,))
        conn.commit()
        return True
    except Error as e:
        print(f"Устгах үед алдаа гарлаа: {e}")
        return False
    finally:
        cur.close()
        conn.close()


