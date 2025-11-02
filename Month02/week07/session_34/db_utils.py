import psycopg2
from psycopg2 import Error

DB_CONFIG = {
    "host": "localhost",
    "database": "session_34",
    "user": "postgres",
    "password": ''
}

def get_db_connection():
    conn = None
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        print("Амжилттай холбогдлоо.")
        return conn
    except Error as e:
        print(f"Холболтын алдаа гарлаа: {e}")
        return None
