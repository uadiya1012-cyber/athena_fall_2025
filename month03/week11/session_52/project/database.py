import psycopg2
from psycopg2 import Error
from psycopg2 import extras

DB = {
    "host": "localhost",
    "database": "smart_expense",
    "user": "postgres",
    "password": "",
    "port": 5432
}

def get_connection():
    try:
        conn = psycopg2.connect(**DB)
        return conn
    except Error as e:
        print(f"Холболт хийх үед алдаа гарлаа: {e}")
        return None
    
def create_categories():
    sql = """
    create table if not exists categories(
        id serial primary key,
        name varchar(50) not null unique
    );
"""
    conn = get_connection()
    if not conn:
        return
    
    try:
        cur = conn.cursor()
        cur.execute(sql)
        conn.commit()
        print(" 'Categories' Хүснэгт амжилттай үүслээ.")
    except Error as e:
        print(f"Хүснэгт үүсэх үед алдаа гарлаа: {e}")
    finally:
        cur.close()
        conn.close()

def create_expenses():
    sql = """
    create table if not exists employees(
        id serial primary key,
        amount integer,
        description varchar(100),
        date date default current_date,
        category_id integer, foreign key (category_id) references categories(id)
    );
"""
    conn = get_connection()
    if not conn:
        return
        
    try:
        cur = conn.cursor()
        cur.execute(sql)
        conn.commit()
        print(" 'Expenses' Хүснэгт амжилттай үүслээ.")
    except Error as e:
        print(f"Хүснэгт үүсэх үед алдаа гарлаа: {e}")
    finally:
        cur.close()
        conn.close()

def fetch_categories():

    conn = get_connection()

    if not conn:
        return
    try:
        cursor = conn.cursor(cursor_factory=extras.DictCursor)
        sql = "select * from categories order by id"
        cursor.execute(sql)
        row = cursor.fetchall()
        return [(r['id'], r['name']) for r in row]
    
    except Error as e:
        print(f"DB унших үед алдаа гарлаа: {e}")
        return []
    finally:
        cursor.close()
        conn.close()


def categories_insert(name):
    conn = get_connection()
    if not conn:
        return False
    sql = "insert into categories (name) values(%s)"

    try:
        cur = conn.cursor()
        cur.execute(sql, (name,))
        conn.commit()
        return True
    except Error as e:
        print(f"{name} нэмэх үед алдаа гарлаа {e}")
        return False
    finally:
        cur.close()
        conn.close()
