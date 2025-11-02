import psycopg2
import sys
from psycopg2 import sql
from contextlib import contextmanager

DB_PARAMS = {
    'dbname': 'todo_db',
    'user': 'postgres',
    'password': '',
    'host': 'localhost',
    'port': '5432'
}

@contextmanager
def database_connection():
    connection = None
    try:
        connection = psycopg2.connect(**DB_PARAMS)
        print("Database connected successfully!")
        yield connection
    except psycopg2.DatabaseError as e:
        print(f"Error during database connection {e}")
        sys.exit(1)
    finally:
        if connection:
            connection.close()
            print("Connection closed")


def connect_db():
    try:
        connection = psycopg2.connect(**DB_PARAMS)
        print("Database connected successfully!")
        return connection
    except psycopg2.DatabaseError as e:
        print(f"Error during database connection {e}")
        sys.exit(1)

def create_task(conn, title, description):

    create_task_query = """
    insert into todo_items (title, description)
    values (%s, %s);    
    """

    try:
        with conn.cursor() as cur:
            cur.execute(create_task_query, (title, description))
            conn.commit() 
            print("Task was created successfully.")
    
    except psycopg2.DatabaseError as e:
        print(f"Error during creating task : {e}")
        conn.rollback()

def read_tasks(conn, status_filter=None):
    try:
        with conn.cursor() as cur:
            if status_filter is None:
                cur.execute("select id, title, description, is_done from todo_items order by id;")
            else:
                cur.execute("select id, title, description, is_done from todo_items where is_done = %s order by id;", (status_filter,))

            tasks = cur.fetchall()
            if not tasks:
                status_text = "all" if status_filter is None else ("done" if status_filter else "not done yet")
                print(f"\n--- {status_text.capitalize()} даалгавар олдсонгүй ---")

                return
            
            status_text = "all" if status_filter is None else ("done" if status_filter else "not done yet")
            print(f"\n--- {status_text.capitalize()} даалгаварууд ({len(tasks)}) ---")

            for task in tasks:
                task_id, title, description, is_done = task
                status = "Done" if is_done else "Not Done"
                print(f"ID: {task_id} | Title: {title} | Description: {description} | Status: {status}")
            print("-" * 50)

    except psycopg2.DatabaseError as e:
        print(f"Error during reading tasks: {e}")


def update_task(conn, task_id, title=None, description=None, is_done=None):
    try:
        with conn.cursor() as cur:
            update_fields = []
            params = []
            
            if title is not None:
                update_fields.append("title = %s")
                params.append(title)
            
            if description is not None:
                update_fields.append("description = %s")
                params.append(description)
            
            if is_done is not None:
                update_fields.append("is_done = %s")
                params.append(is_done)
            
            if not update_fields:
                print("No fields to update!")
                return
            
            params.append(task_id)
            
            update_query = sql.SQL("UPDATE todo_items SET {} WHERE id = %s").format(
                sql.SQL(", ").join(map(sql.SQL, update_fields))
            )
            
            cur.execute(update_query, params)
            conn.commit()
            
            if cur.rowcount > 0:
                print("Task updated successfully!")
            else:
                print(f"No task found with ID: {task_id}")
            
    except psycopg2.DatabaseError as e:
        print(f"Error during updating task: {e}")
        conn.rollback()


def delete_task(conn, task_id):
    try:
        with conn.cursor() as cur:
            cur.execute("select title from todo_items where id = %s;", (task_id,))
            task = cur.fetchone()
            if not task:
                print(f"ID: {task_id} даалгавар олдсонгүй")
                return
            task_title = task[0]
            print(f"Are you sure??????")
            print(f" Title: {task_title}")
            print(f"ID: {task_id}")

            confirm = get_user_input(" Confirm (yes/no):")

            if confirm == "yes":
                delete_query = "delete from todo_items where id = %s;"
                cur.execute(delete_query, (task_id,))

                if cur.rowcount > 0:
                    print("Task successfully deleted!")
                else:
                    print("Error during deleting task!")
            else:
                print("Deletion canceled")                    
                
    except psycopg2.DatabaseError as e:
        print(f"Error during deleting task: {e}")
        conn.rollback()


def filter_tasks_menu(conn):
    
    print("\n--- Даалгавруудыг төлөвөөр шүүх ---")
    print("1. Бүх даалгаврууд")
    print("2. Хийгдсэн даалгаврууд")
    print("3. Хийгээгүй даалгаврууд")
    print("4. Буцах")
    
    choice = get_user_input("Сонголтоо оруулна уу (1-4): ")
    
    if choice == "1":
        read_tasks(conn, status_filter=None)
    elif choice == "2":
        read_tasks(conn, status_filter=True)
    elif choice == "3":
        read_tasks(conn, status_filter=False)
    elif choice == "4":
        return
    else:
        print("✗ Буруу сонголт! 1-4 хооронд сонгоно уу.")

    
def get_user_input(prompt):
    return input(prompt).strip()


def main():
    with database_connection() as conn:
    
        while True:
            print("\n" + "="*50)
            print(" TODO APP - ДААЛГАВРЫН ХЯНАЛТЫН СИСТЕМ")
            print("="*50)
            print("1.  Шинэ даалгавар нэмэх")
            print("2.  Бүх даалгаврууд харах")
            print("3.  Төлөвөөр шүүх / харах")
            print("4.  Даалгавар шинэчлэх")
            print("5.  Даалгавар устгах")
            print("6.  Гарах")
     
        
            choice = get_user_input("Сонголтоо оруулна уу (1-6): ")
        
            if choice == "1":
                print("\n--- Шинэ даалгавар нэмэх ---")
                title = get_user_input("Гарчиг: ")
                if not title:
                    print("Must need title")
                    continue
                description = get_user_input("Тайлбар: ")
                create_task(conn, title, description)
            
            elif choice == "2":
                read_tasks(conn, status_filter=None)
            
            elif choice == "3":
                filter_tasks_menu(conn)

            elif choice == "4":
                print("\n--- Даалгавар шинэчлэх ---")
                try:
                    task_id = int(get_user_input("Шинэчлэх даалгаврын ID: "))
                    
                    print("Шинэ утгуудыг оруулна уу (хоосон орхих бол ENTER дарна уу):")
                    new_title = get_user_input("Шинэ гарчиг: ")
                    new_title = new_title if new_title else None
                    
                    new_description = get_user_input("Шинэ тайлбар: ")
                    new_description = new_description if new_description else None
                    
                    status_input = get_user_input("Төлөв (true/false): ").lower()
                    new_status = None
                    if status_input == "true":
                        new_status = True
                    elif status_input == "false":
                        new_status = False
                    
                    update_task(conn, task_id, new_title, new_description, new_status)
                    
                except ValueError:
                    print("Буруу ID формат! Тоо оруулна уу.")
                
            elif choice == "5":
                print("\n--- Даалгавар устгах ---")
                try:
                    task_id = int(get_user_input("Устгах даалгаврын ID: "))
                    delete_task(conn, task_id)
                except ValueError:
                    print("Буруу ID формат! Тоо оруулна уу.")
                
            elif choice == "6":
                print("Программаас гарлаа. Баяртай!")
                break
            
            else:
                print("Буруу сонголт! 1-6 хооронд сонгоно уу.")

    
if __name__ == "__main__":
    main()
