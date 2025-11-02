from db_functions import (get_db_connection, creat_table, add_new_product,
                          view_all_products, find_product_by_id, update_product,
                          delete_product, show_product_report_with_join, join_tables)

def show_menu():
    print("\n--- Үндсэн Цэс ---")
    print("1. Шинэ бүтээгдэхүүн нэмэх (CREATE)")
    print("2. Бүх бүтээгдэхүүн харах (READ all)")
    print("3. ID-аар бүтээгдэхүүн хайх (READ one)")
    print("4. Бүтээгдэхүүний үнэ засах (UPDATE)")
    print("5. Бүтээгдэхүүн устгах (DELETE)")
    print("6. Нэгтгэсэн тайлан харах (JOIN)")
    print("7. Гарах")

def main():
    get_db_connection()
    creat_table()
    while True:
        show_menu()
        choice = input("Сонголтоо оруулна уу (1-7): ").strip()

        if choice == '1':
            name_products = input("Барааны нэр: ")
            price = input("үнэ оруулна уу: ")
            add_new_product(name_products, price)
        elif choice == '2':
            view_all_products()
        elif choice == '3':
            id_find = input("ID оруулна уу: ")
            find_product_by_id(id_find)
        elif choice == '4':
            id = input("Та ID оруулна уу: ")
            new_price = input("Та шинэ үнээ оруулна уу: ")
            update_product(id, new_price)
        elif choice == '5':
            delete_id = input("Та ID оруулна уу: ")
            delete_product(delete_id)
        elif choice == '6':
            show_product_report_with_join(), join_tables()
        elif choice == '7':
            print("Баяртай")
            break

if __name__ == "__main__":
    main()