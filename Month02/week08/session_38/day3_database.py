import psycopg2
from psycopg2 import Error

DB_CONFIG = {
    'dbname': 'session_38',
    'user': 'postgres',
    'password': '',
    'host': 'localhost',
    'port': '5432'
}

def get_connection():
    connection = None
    try:
        connection = psycopg2.connect(**DB_CONFIG)
        print("Мэдээллийн сантай амжилттай холбогдлоо!")
        return connection
    except Error as e:
        print(f"Мэдээллийн сантай холбогдоход алдаа гарлаа: {e}")
        return None
    
def setup_database(create_table_sql):
    connection = get_connection()
    if connection is None:
        print("Холболт амжилтгүй тул хүснэгт үүсэх боломжгүй.")
        return None

    try:
        with connection.cursor() as cur:
            cur.execute(create_table_sql)
            connection.commit()
            print("Хүснэгт амжилттай үүслээ.")
            return connection
    
    except psycopg2.DatabaseError as e:
        print(f"Алдаа : {e}")
        connection.rollback()
        return None
    finally:
        if connection:
            connection.close()


