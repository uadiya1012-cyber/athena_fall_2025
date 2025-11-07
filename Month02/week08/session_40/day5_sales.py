from day5_database import get_connection

def view_inventory():
    conn = None
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("select * from products39 order by product_name")
        rows = cur.fetchall()

        if not rows:
            print("Барааны мэдээлэл олдсонгүй.")
        else:
            print("--- Барааны мэдээлэл ---")
            for row in rows:
                print(f"ID: {row[0]}, Name: {row[1]}, Quantity: {row[2]}, Price: {row[3]:.2f}")
                print("------------------------\n")
    except Exception as e:
        print(f"Алдаа гарлаа: {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

def make_sale(product_id, quantity_to_sale):
    conn = None
    try:
        conn = get_connection()
        cur = conn.cursor()
        sql = "select quantity from products where id = %s"
        cur.execute(sql, (product_id,))
        row = cur.fetchone()
        if row is None:
            print("ID олдсонгүй.")
            return False
        current_stock = row[0]
        if current_stock >= quantity_to_sale:
            sql_update = "update products set quantity = quantity - %s where id = %s"
            cur.execute(sql_update, (quantity_to_sale, product_id))
            conn.commit()
        
            into_sql = "insert into sales (product_id_fk, quantity_sold) values (%s, %s)"
            cur.execute(into_sql, (product_id, quantity_to_sale))
            conn.commit()
            print("Борлуулалт хангалттай!")
            return True
        else:
            print("❌ Алдаа: Барааны үлдэгдэл хүрэлцэхгүй.")
            return False
            

    except Exception as e:
        print(f" Гүйлгээ амжилтгүй боллоо: {e}")
        if conn:
            conn.rollback()
        return False
    finally:
        if conn:
            conn.close()

# --- Үндсэн ажиллагаа (Туршилтын хэсэг) ---
if __name__ == "__main__":
    
    # (Хэрэв танд ID=1-тэй бараа байхгүй бол, 
    #  day4_inventory-с add_product функцийг импортлож нэмээрэй)
    
    print("--- 1. Анхны үлдэгдэл ---")
    # 4-р өдрөөс хуулсан функцээ дуудна
    view_inventory() 
    
    print("\n--- 2. Амжилттай борлуулалт (ID=1, 3 ширхэг) ---")
    make_sale(1, 3)
    view_inventory() # Үлдэгдэл 10-аас 7 болох ёстой

    print("\n--- 3. Амжилтгүй борлуулалт (ID=1, 50 ширхэг) ---")
    print("(Үлдэгдэл хүрэлцэхгүй тул юу ч өөрчлөгдөх ёсгүй)")
    make_sale(1, 50)
    view_inventory() # Үлдэгдэл 7 хэвээрээ байх ёстой
    
    print("\n--- 4. Амжилттай борлуулалт (ID=1, 2 ширхэг) ---")
    make_sale(1, 2)
    view_inventory() # Үлдэгдэл 7-оос 5 болох ёстой


    
