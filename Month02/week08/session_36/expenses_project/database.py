import psycopg2
from psycopg2 import Error

DB_CONFIG = {
    "host": "localhost",
    "database": "expenses_db",
    "user": "postgres",
    "password": ''
}

def get_db_connection():
    connection = None
    try:
        connection = psycopg2.connect(**DB_CONFIG)
        print("Мэдээллийн сантай амжилттай холбогдлоо!")
        return connection
    except Error as e:
        print(f"Мэдээллийн сантай холбогдоход алдаа гарлаа: {e}")
        return None
