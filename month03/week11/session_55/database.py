import psycopg2

DB_URL = "postgresql://postgres:@localhost:5432/gamergear"

def get_connection():
    try:
        conn = psycopg2.connect(DB_URL)
        return conn
    except Exception as e:
        print("Өгөгдлийн сантай холбогдож чадсангүй:", e)
        return None


def insert_product(name, price):
    try:
        conn = get_connection()
        if conn is None:
            return False

        cur = conn.cursor()
        sql = "INSERT INTO products (name, price) VALUES (%s, %s)"
        cur.execute(sql, (name, price))
        conn.commit()

        cur.close()
        conn.close()
        return True

    except Exception as e:
        print("Хадгалах явцад алдаа гарлаа:", e)
        return False
