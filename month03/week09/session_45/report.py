import psycopg2

# PostgreSQL-тэй холбогдох мэдээллээ энд оруулна
DB_NAME = "dvd_rental"
DB_USER = "postgres"
DB_PASS = "postgres"
DB_HOST = "localhost"
DB_PORT = "5432"

def get_db_connection():
    """Мэдээллийн сантай холболт үүсгэж, буцаана."""
    try:
        conn = psycopg2.connect(
            dbname=DB_NAME,
            user=DB_USER,
            password=DB_PASS,
            host=DB_HOST,
            port=DB_PORT
        )
        return conn
    except psycopg2.OperationalError as e:
        print(f"❌ Мэдээллийн сантай холбогдож чадсангүй: {e}")
        return None
    
def get_top_5_customers(conn):
    """Хамгийн их мөнгө зарцуулсан 5 хэрэглэгчийг олно."""
    print("\n--- 🏆 Хамгийн их мөнгө зарцуулсан ТОП 5 хэрэглэгч ---")
    
    query = """
        select c.first_name , c.last_name , SUM(p.amount) as total_amount
        from customer c 
        join payment p on c.customer_id = p.customer_id 
        group by c.first_name , c.last_name 
        order by total_amount desc limit 5;
    """
    
    with conn.cursor() as cur:
        cur.execute(query)
        results = cur.fetchall()
        for i, row in enumerate(results, 1):
            # Үр дүнг цэгцтэй хэвлэх: 1. Bold Dorj - $211.55
            print(f"{i}. {row[0]} {row[1]} - ${row[2]:.2f}")


def get_top_5_films(conn):
    """Хамгийн олон удаа түрээслэгдсэн 5 киног олно."""
    print("\n--- 🎬 Хамгийн олон удаа түрээслэгдсэн ТОП 5 кино ---")
    
    query = """
        select f.title, count(r.rental_id) as rental_count
        from film f
        join inventory i on f.film_id = i.film_id
        join rental r on i.inventory_id = r.inventory_id
        group by f.film_id, f.title
        order by rental_count desc
        limit 5
    """
    
    with conn.cursor() as cur:
        cur.execute(query)
        results = cur.fetchall()
        for i, row in enumerate(results, 1):
            print(f"{i}. {row[0]} ({row[1]} удаа)")


def get_film_count_by_category(conn):
    """Ангилал тус бүрд хичнээн кино байгааг олно."""
    print("\n--- 📚 Ангилал тус бүрийн киноны тоо ---")
    
    query = """
        select c.name as category_name, count(f.film_id) as film_count
        from category c join film_category fc on c.category_id = fc.category_id
        join film f on fc.film_id = f.film_id
        group by c.category_id, c.name
        order by film_count desc
    """
    
    with conn.cursor() as cur:
        cur.execute(query)
        results = cur.fetchall()
        for row in results:
            print(f"- {row[0]}: {row[1]} кино")


def main():
    """Үндсэн функц. Холболт үүсгэж, тайлангуудыг ажиллуулна."""
    conn = get_db_connection()
    if conn:
        get_top_5_customers(conn)
        get_top_5_films(conn)
        get_film_count_by_category(conn)
        
        # Холболтыг хаах
        conn.close()
        print("\n✅ Тайлан амжилттай үүслээ. Холболт хаагдлаа.")

if __name__ == "__main__":
    main()