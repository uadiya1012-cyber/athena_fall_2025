import psycopg2
import sys
from psycopg2 import sql

DB_PARAMS = {
    'dbname': 'session_30',
    'user': 'postgres',
    'password': '',
    'host': 'localhost',
    'port': '5432'
}

def get_db_connection():
    try:
        connection = psycopg2.connect(**DB_PARAMS)
        return connection
    except psycopg2.DatabaseError as e:
        print(f"Error during database connection {e}")
        sys.exit(1)

def get_product_categories():
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            query = """
                select p.name, p.price, c.name
                from products p
                inner join categories c
                on p.category_id = c.id
                order by c.name, p.name;
            """
            cur.execute(query)
            results = cur.fetchall()
            return results
    except psycopg2.DatabaseError as e:
        print(f"Error during database connection {e}")
        sys.exit(1)
    finally:
        conn.close()

def get_category_counts():
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            query = """
                select c.name, count(p.id)
                as product_count
                from categories c
                left join products p
                on c.id = p.category_id
                group by c.id, c.name
                order by product_count desc;
            """
            cur.execute(query)
            results = cur.fetchall()
            return results
    except psycopg2.DatabaseError as e:
        print(f"Error during database connection {e}")
        sys.exit(1)
    finally:
        conn.close()

def get_average_price_per_category():
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            query = """
                select c.name, round(avg(p.price), 2)
                as average_price
                from categories c
                left join products p
                on c.id = p.category_id
                group by c.id, c.name
                order by average_price desc;
            """
            cur.execute(query)
            results = cur.fetchall()
            return results
    except psycopg2.DatabaseError as e:
        print(f"Error during database connection {e}")
        sys.exit(1)
    finally:
        conn.close()

if __name__ == "__main__":
    print("=== БҮТЭЭГДЭХҮҮНИЙ МЭДЭЭЛЭЛ ===")

    print("\n--- 1. БҮТЭЭГДЭХҮҮН БА АНГИЛЛЫН ЖАГСААЛТ ---")
    products = get_product_categories()
    for product_name, price, category_name in products:
        print(f"Бүтээгдэхүүн: {product_name} | Үнэ: {price} | Ангилал: {category_name}")

    print("\n--- 2. АНГИЛЛЫН БҮТЭЭГДЭХҮҮНИЙ ТОО ---")
    category_counts = get_category_counts()
    for category_name, count in category_counts:
        print(f"Ангилал: {category_name} | Нийт бүтээгдэхүүн: {count}")

    print("\n--- 3. АНГИЛАЛ ТУС БҮРИЙН ДУНДАЖ ҮНЭ ---")
    avg_prices = get_average_price_per_category()
    for category_name, avg_price in avg_prices:
        print(f"Ангилал: {category_name} | Дундаж үнэ: {avg_price}")

    print("=== ТАЙЛАН ДУУСЛАА ===")



