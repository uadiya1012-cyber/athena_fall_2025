from day2_database import get_connection

def add_task(description):
    try:
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("INSERT INTO tasks (task_description) VALUES (%s)", (description,))
        conn.commit()
        
        print(f" Ажил нэмэгдлээ: '{description}'")
        
    except Exception as e:
        print(f" Алдаа: {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

def mark_task_complete(task_id):
    try:
        conn = get_connection()
        cur = conn.cursor()
        
        cur.execute("UPDATE tasks SET is_completed = TRUE WHERE id = %s", (task_id,))
        conn.commit()
        
        if cur.rowcount == 0:
            print(f" {task_id} ID-тай ажил олдсонгүй.")
        else:
            print(f" Ажил {task_id}-г дууссан болголоо.")
            
    except Exception as e:
        print(f" Алдаа: {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

def remove_task(task_id):
    try:
        conn = get_connection()
        cur = conn.cursor()
        
        cur.execute("DELETE FROM tasks WHERE id = %s", (task_id,))
        conn.commit()
        
        if cur.rowcount == 0:
            print(f" {task_id} ID-тай ажил олдсонгүй.")
        else:
            print(f" Ажил {task_id}-г устгалаа.")
            
    except Exception as e:
        print(f" Алдаа: {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

def view_pending_tasks():
    try:
        conn = get_connection()
        cur = conn.cursor()
        
        cur.execute("SELECT id, task_description FROM tasks WHERE is_completed = FALSE ORDER BY id")
        tasks = cur.fetchall()
        
        if not tasks:
            print("Хийгдээгүй ажил алга! ✨")
        else:
            print("--- ⏳ ХИЙГДЭЭГҮЙ АЖЛУУД ---")
            for task in tasks:
                print(f"[{task[0]}] {task[1]}")
            print("------------------------------")
            
    except Exception as e:
        print(f" Алдаа: {e}")
    finally:
        if conn:
            cur.close()
            conn.close()

if __name__ == "__main__":
    
    print("--- 1. Шинэ ажлууд нэмж байна... ---")
    add_task("Хүнсээ цуглуулах")
    add_task("Python-ий psycopg2 сурах")
    add_task("2-р өдрийн төслөө дуусгах")
    
    view_pending_tasks()
    
    print("\n--- 2. 2-р ажлыг дууссан болгож байна... ---")
    mark_task_complete(2)
    
    view_pending_tasks()
    
    print("\n--- 3. 1-р ажлыг устгаж байна... ---")
    remove_task(1)
    
    view_pending_tasks()

    print("\n--- 4. Байдаггүй ажлыг устгахыг оролдож байна... ---")
    remove_task(99) 