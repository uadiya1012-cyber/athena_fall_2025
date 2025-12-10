import psycopg2
from psycopg2.extras import RealDictCursor

# Database тохиргоо
DB_CONFIG = {
    'dbname': 'taskmanager',
    'user': 'postgres',
    'password': '',# ⚠️ Өөрийн password оруул!'host': 'localhost',
    'port': 5432
}

def get_connection():
    """Database холболт үүсгэх"""
    return psycopg2.connect(**DB_CONFIG, cursor_factory=RealDictCursor)

def get_all_tasks():
    """Бүх task-уудыг авах - GET /tasks"""
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tasks ORDER BY id")
    tasks = cursor.fetchall()
    cursor.close()
    conn.close()
    return tasks

def create_task(title, description):
    """Шинэ task үүсгэх - POST /tasks"""
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO tasks (title, description) VALUES (%s, %s) RETURNING *",
        (title, description)
    )
    new_task = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()
    return new_task

def update_task(task_id, title, description, completed):
    """Task шинэчлэх - PUT /tasks/{id}"""
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        """UPDATE tasks
           SET title = %s, description = %s, completed = %s
           WHERE id = %s RETURNING *""",
        (title, description, completed, task_id)
    )
    updated_task = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()
    return updated_task

def delete_task(task_id):
    """Task устгах - DELETE /tasks/{id}"""
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM tasks WHERE id = %s", (task_id,))
    conn.commit()
    cursor.close()
    conn.close()
