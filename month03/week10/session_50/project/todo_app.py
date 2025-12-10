import psycopg2
from psycopg2.extras import RealDictCursor  # Мөрийг dict (толь бичиг) хэлбэрээр авах
import os

# --- 1. ТОХИРГОО ---

# !!! ЧУХАЛ: Энэ мөрийг өөрийн PostgreSQL серверт тааруулна уу !!!
# "postgresql://[ХЭРЭГЛЭГЧ]:[НУУЦ ҮГ]@[ХОСТ]:[ПОРТ]/[ӨГӨГДЛИЙН САНГИЙН НЭР]"
DB_CONN_STRING = "postgresql://postgres:@localhost:5432/friday_project"

def get_connection():
    """PostgreSQL өгөгдлийн сантай холбогдоно."""
    try:
        # row_factory-г тохируулснаар task['id'] гэх мэтээр хандах боломжтой болно
        conn = psycopg2.connect(DB_CONN_STRING, cursor_factory=RealDictCursor)
        return conn
    except psycopg2.OperationalError as e:
        print(f"\n--- АЛДАА: Өгөгдлийн сантай холбогдож чадсангүй ---")
        print(f"Та 'DB_CONN_STRING' ({DB_CONN_STRING})-г шалгана уу.")
        print(f"PostgreSQL сервер ажиллаж байгаа эсэхийг шалгана уу.")
        print(f"Дэлгэрэнгүй алдаа: {e}")
        exit() # Холбогдож чадахгүй бол програмаас гарна

def create_table():
    """'tasks' (ажлууд) хүснэгтийг байхгүй бол үүсгэнэ."""
    # 'with' ашигласнаар холболт болон transaction автоматаар хаагдана
    try:
        with get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute("""
                    CREATE TABLE IF NOT EXISTS tasks (
                        id SERIAL PRIMARY KEY,
                        title TEXT NOT NULL,
                        status TEXT NOT NULL DEFAULT 'хүлээгдэж буй'
                    );
                """)
        print("Өгөгдлийн сан бэлэн. Хүснэгт шалгагдлаа.")
    except Exception as e:
        print(f"Хүснэгт үүсгэхэд алдаа гарлаа: {e}")

# --- 2. CRUD ФУНКЦҮҮД ---

def add_task():
    """ (C)reate: Өгөгдлийн санд шинэ ажил нэмнэ."""
    print("\n--- 2. Шинэ Ажил Нэмэх ---")
    title = input("Ажлын тайлбарыг оруулна уу: ")
    
    if not title:
        print("АЛДАА: Ажлын тайлбар хоосон байж болохгүй.")
        return

    try:
        with get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                    "INSERT INTO tasks (title) VALUES (%s);", (title,)
                )
                # PostgreSQL нь параметрт '%s'-г ашигладаг
        
        print(f"АМЖИЛТТАЙ: '{title}' ажлыг нэмлээ.")
    except Exception as e:
        print(f"Ажил нэмэх үед алдаа гарлаа: {e}")

def view_tasks():
    """ (R)ead: Өгөгдлийн сангаас бүх ажлыг харуулна."""
    print("\n--- 1. Бүх Ажлууд ---")
    
    try:
        with get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM tasks ORDER BY status, id")
                tasks = cursor.fetchall()
        
        if not tasks:
            print("Таны ажлын жагсаалт хоосон байна. Шинээр нэг ажил нэмээрэй!")
            return

        # Хүснэгтийг хэвлэх
        print(f"\n{'ID':<4} | {'Төлөв':<15} | {'Ажлын Тайлбар':<40}")
        print("-" * 62)
        for task in tasks:
            # row_factory-г тохируулсан тул task['id'] гэж хандаж болно
            print(f"{task['id']:<4} | {task['status']:<15} | {task['title']:<40}")
            
    except Exception as e:
        print(f"Ажлуудыг харуулахад алдаа гарлаа: {e}")

def update_task():
    """ (U)pdate: Ажлыг 'дуусгавар болсон' болгож шинэчилнэ."""
    print("\n--- 3. Ажлыг Дуусгавар Болгох ---")
    view_tasks() # Хэрэглэгчид ID-г харахад нь туслах

    if not view_tasks_exist(): # Хэрэв ажил байхгүй бол шууд буцах
        return
        
    try:
        task_id = int(input("\nДуусгах ажлын ID дугаарыг оруулна уу: "))
    except ValueError:
        print("АЛДАА: Буруу ID байна. Тоо оруулна уу.")
        return

    try:
        with get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM tasks WHERE id = %s", (task_id,))
                task = cursor.fetchone()
                # Эхлээд ажил байгаа эсэхийг шалгана
                
                if task:
                    if task['status'] == 'дуусгавар болсон':
                        print(f"АНХААРУУЛГА: {task_id} ID-тай ажил аль хэдийн 'дуусгавар болсон' байна.")
                    else:
                        cursor.execute("UPDATE tasks SET status = 'дуусгавар болсон' WHERE id = %s", (task_id,))
                        print(f"АМЖИЛТТАЙ: {task_id} ID-тай ажлыг 'дуусгавар болсон' болголоо.")
                else:
                    print(f"АЛДАА: {task_id} ID-тай ажил олдсонгүй.")
    except Exception as e:
        print(f"Ажил шинэчлэхэд алдаа гарлаа: {e}")

def delete_task():
    """ (D)elete: Өгөгдлийн сангаас ажлыг устгана."""
    print("\n--- 4. Ажил Устгах ---")
    view_tasks() # Хэрэглэгчид ID-г харахад нь туслах
    if not view_tasks_exist():
        return
        
    try:
        task_id = int(input("\nУстгах ажлын ID дугаарыг оруулна уу: "))
    except ValueError:
        print("АЛДАА: Буруу ID байна. Тоо оруулна уу.")
        return

    try:
        with get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM tasks WHERE id = %s;", (task_id,))
                task = cursor.fetchone()
                # Устгахаасаа өмнө байгаа эсэхийг шалгана

                if task:
                    # Хэрэглэгчээс баталгаажуулалт асуух
                    confirm = input(f"Та '{task['title']}' (ID: {task_id}) ажлыг устгахдаа итгэлтэй байна уу? (тийм/үгүй): ").lower()
                    if confirm == 'тийм' or confirm == 'т':
                        cursor.execute("DELETE FROM tasks WHERE id = %s", (task_id,))
                        print(f"АМЖИЛТТАЙ: {task_id} ID-тай ажлыг устгалаа.")
                    else:
                        print("Ажил устгахыг цуцаллаа.")
                else:
                    print(f"АЛДАА: {task_id} ID-тай ажил олдсонгүй.")
    except Exception as e:
        print(f"Ажил устгахад алдаа гарлаа: {e}")

# --- 3. ТУСЛАХ ФУНКЦ БА ҮНДСЭН ЦЭС ---

def view_tasks_exist():
    """Ажил байгаа эсэхийг шалгах туслах функц (Update/Delete-д хэрэглэгдэнэ)"""
    with get_connection() as conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT COUNT(*) FROM tasks")
            count = cursor.fetchone()['count']
            if count == 0:
                print("\nТаны ажлын жагсаалт одоогоор хоосон байна.")
                return False
            return True

def print_menu():
    """Үндсэн цэсийг хэрэглэгчид харуулна."""
    print("\n========= Терминалын Ажлын Жагсаалт (PostgreSQL) ==========")
    print("1. Бүх ажлыг харах")
    print("2. Шинэ ажил нэмэх")
    print("3. Ажлыг 'дуусгавар болсон' болгох")
    print("4. Ажил устгах")
    print("5. Гарах")
    print("==========================================================")

def main():
    """Програмыг ажиллуулах үндсэн функц."""
    # Эхлэхээсээ өмнө хүснэгт байгаа эсэхийг шалгана
    create_table()
    
    while True:
        print_menu()
        choice = input("Сонголтоо хийнэ үү (1-5): ")
        
        if choice == '1':
            view_tasks()
            
        elif choice == '2':
            add_task()
        
        elif choice == '3':
            update_task()
            
        elif choice == '4':
            delete_task()
            
        elif choice == '5':
            print("Баяртай! Таныг дахин ирээрэй.")
            break
        else:
            print("АЛДАА: Буруу сонголт. 1-5 хооронд тоо оруулна уу.")

# Энэ скриптийг терминалаас `python todo_app.py` гэж ажиллуулахад 'main' функцийг дуудна
if __name__ == "__main__":
    main()