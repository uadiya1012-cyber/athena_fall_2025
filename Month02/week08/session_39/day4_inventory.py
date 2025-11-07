from day4_database import get_connection

def add_product(name, quantity, price):
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("insert into products39 (product_name, quantity, price)" \
        "values (%s, %s, %s)", (name, quantity, price))
        conn.commit()
        print(f"{name} нэртэй, {quantity} ширхэг, {price} үнэтэй бараа нэмэгдлээ. ")
    except Exception as e:
        print(f"Барааны нэр давхацсан байна. Алдаа: {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

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

def update_product_stock(product_id, new_quantity):
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("update products39 set quantity = %s where id = %s", (new_quantity, product_id))
        conn.commit()
        if cur.rowcount > 0:
            print(f"{product_id} ID барааны тоо {new_quantity} болж шинчлэгдлээ")
        else:
            print(f"{id}-тай бараа олдсонгүй")
    except Exception as e:
        print(f"Алдаа гарлаа: {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

def delete_product(product_id):
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("delete from products39 where id = %s", (product_id,))
        conn.commit()
        if cur.rowcount == 0:
            print(f"Устгах үед алдаа гарлаа: {product_id}")
        else:
            print(f"{product_id} амжилттай устлаа.")
    except Exception as e:
        print(f"Алдаа гарлаа: {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

def search_product(search_term):
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("select * from products39 " \
        "where product_name like %s", (f'%{search_term}%',))
        products = cur.fetchall()
        print(f"\n--- '{search_term}' хайсан үр дүн ---")
        if not products:
            print("Бараа олдсонгүй.")
        else:
            for product in products:
                print(f"ID: {product[0]}, Name: {product[1]}, Quantity: {product[2]}, Price: {product[3]:.2f}")
                print("-------------------------------------\n")

    except Exception as e:
        print(f"Алдаа гарлаа: {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

def print_menu():
    print("-- Барааны Менежер ---")
    print("1. Бараа нэмэх")
    print("2. Бүх барааг харах")
    print("3. Барааны үлдэгдэл шинэчлэх")
    print("4. Бараа устгах")
    print("5. Хайх барааны нэр: ")
    print("6. Гарах")
    print("-------------------------")

def main():
    print_menu()
    while True:
        choice = input("Сонголтоо оруулна уу (1-6): ")
        if choice == '1':
            name = input("Барааны нэр: ")
            quantity = int(input("Тоо ширхэг: "))
            price = int(input("Үнэ: "))
            add_product(name, quantity, price)

        elif choice == '2':
            
            view_inventory()

        elif choice == '3':
            product_id = int(input("Барааны ID: "))
            new_quantity = int(input("Шинчлэх тоо ширхэг: "))
            update_product_stock(product_id, new_quantity)

        elif choice == '4':
            product_id = int(input("Устгах барааны ID: "))
            delete_product(product_id)

        elif choice == '5':
            search_term = input("Хайх барааны нэр: ")
            search_product(search_term)

        elif choice == '6':
            print("Гарч байна...")
            break
        else:
            print("Буруу сонголт, дахин оролдоно уу.")

if __name__ == "__main__":
    main()

            



    


