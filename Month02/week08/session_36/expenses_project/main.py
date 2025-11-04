from database import get_connection
from database import Error

def log_expense(item, cost):

    conn = get_connection()
    # if conn is None:
    #     return False
    
    try:
        cur = conn.cursor()
        
        insert_query = "INSERT INTO expenses (item_name, cost) VALUES (%s, %s)"
        cur.execute(insert_query, (item, cost))
        
        conn.commit()
        
        print("Зардал бүртгэгдлээ!")
        # return True
        
    except Error as e:
        print(f"Алдаа: {e}")
        conn.rollback()
        # return False
        
    # finally:
    #     if conn:
    #         cur.close()
    #         conn.close()

def view_all_expenses():

    conn = get_connection()
    if conn is None:
        return
    
    try:
        cur = conn.cursor()
        
        select_query = "SELECT * FROM expenses ORDER BY purchase_date DESC"
        cur.execute(select_query)

        expenses = cur.fetchall()
        
        if not expenses:
            print("Одоогоор бүртгэгдсэн зардал байхгүй байна.")
            return
        
        print("\n" + "="*60)
        print("БҮХ ЗАРДЛЫН ЖАГСААЛТ")
        print("="*60)
        print(f"{'ID':<4} {'Нэр':<20} {'Үнэ':<12} {'Огноо':<12}")
        print("-"*60)
        
        for expense in expenses:
            id, item_name, cost, purchase_date = expense
            print(f"{id:<4} {item_name:<20} {cost:<12} {purchase_date}")
            
        print("="*60)
        print(f"Нийт: {len(expenses)} зардал")
        
    except Error as e:
        print(f"Алдаа: {e}")
        
    finally:
        if conn:
            cur.close()
            conn.close()

def main():

    print("Хувийн Зардлын Тэмдэглэлд тавтай морил!")
    
    while True:
        print("\n" + "="*40)
        print("🏠 ҮНДСЭН ЦЭС")
        print("="*40)
        print("1. Шинэ зардал нэмэх")
        print("2. Бүх зардлыг харах")
        print("3. Гарах")
        print("-"*40)
        
        choice = input("Сонголтоо оруулна уу (1-3): ").strip()
        
        if choice == "1":
            print("\n==ШИНЭ ЗАРДАЛ НЭМЭХ==")
            print("-"*30)
            
            item = input("Зардлын нэр: ").strip()
            if not item:
                print("Алдаа: Зардлын нэр хоосон байж болохгүй!")
                continue
                
            cost_input = input("Үнийн дүн: ").strip()
            
            try:
                cost = float(cost_input)
                if cost <= 0:
                    print("Алдаа: Үнийн дүн 0-ээс их байх ёстой!")
                    continue
                    
                log_expense(item, cost)
                
            except Error:
                print("Алдаа: Үнийн дүн зөвхөн тоо байх ёстой!")
                
        elif choice == "2":
            print("\n==БҮХ ЗАРДЛЫГ ХАРАХ==")
            print("-"*30)
            view_all_expenses()
            
        elif choice == "3":
            print("\nБаяртай! Дараа дахин уулзацгаая!")
            break
            
        else:
            print("Буруу сонголт! 1-3-ын хооронд сонгоно уу.")

if __name__ == "__main__":
    main()