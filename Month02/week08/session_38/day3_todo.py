from day3_database import get_connection

def add_task(description):
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("insert into tasks (task_description)" \
        "values (%s)" (description,))
        conn.commit()
        print(f"Work has just added {description}")

    except Exception as e:
        print(f" Error {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

def mark_task_complete(task_id):
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("update tasks set is_completed = true" \
        "where id = %s", (task_id,))
        conn.commit()
        if cur.rowcount == 0:
            print(f"No job has found with ID: {task_id} ")
        else:
            print(f"Job with {task_id} ID has done")
    
    except Exception as e:
        print(f" Error {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

def remove_task(task_id):
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("delete from tasks where id = %s", (task_id,))
        conn.commit()
        if cur.rowcount == 0:
            print(f"No job has found with ID: {task_id}")
        else:
            print(f"ID: {task_id} has deleted")

    except Exception as e:
        print(f" Error {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

def view_pending_tasks():
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("select id, task_description from tasks" \
        "where is_completed = false order by id")
        tasks = cur.fetchall()

        if not tasks:
            print("All job is done great!")
        else:
            print("-- ⏳ Not done yet jobs --- ")
            for task in tasks:
                print(f"[{task[0]}] {task[1]}")
            print("------------------------------")
    except Exception as e:
        print(f"Error {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

# --- Үндсэн ажиллагаа (Кодоо энд турш) ---
if __name__ == "__main__":
    
    print("--- 1. Шинэ ажлууд нэмж байна... ---")
    add_task("Хүнсээ цуглуулах")
    add_task("Python-ий psycopg2 сурах")
    add_task("2-р өдрийн төслөө дуусгах")
    
    # Энэ үед танд 3 хийгдээгүй ажил байх ёстой
    view_pending_tasks()
    
    print("\n--- 2. 2-р ажлыг дууссан болгож байна... ---")
    mark_task_complete(2) # 'Python-ий psycopg2 сурах' ажлыг дуусгана
    
    # Одоо танд 2 хийгдээгүй ажил үлдэх ёстой
    view_pending_tasks()
    
    print("\n--- 3. 1-р ажлыг устгаж байна... ---")
    remove_task(1) # 'Хүнсээ цуглуулах' ажлыг устгана
    
    # Одоо танд зөвхөн 1 хийгдээгүй ажил үлдэх ёстой
    view_pending_tasks()

    print("\n--- 4. Байдаггүй ажлыг устгахыг оролдож байна... ---")
    remove_task(99) # Энэ нь "олдсонгүй" гэсэн мессеж хэвлэх ёстой


