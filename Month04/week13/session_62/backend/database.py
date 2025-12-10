import psycopg2
from psycopg2.extras import RealDictCursor

DB_CONFIG = {
    'dbname': 'taskmanager',
    'user': 'postgres',
    'password': '',
    'host': 'localhost',
    'port': 5432
}

def get_connection():
    return psycopg2.connect(**DB_CONFIG, cursor_factory=RealDictCursor)

def get_all_tasks():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("select * from tasks order by id")
    tasks = cursor.fetchall()
    cursor.close()
    conn.close()
    return tasks

def create_task(title, description):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("insert into tasks (title, description) values (%s, %s) returning *", (title, description))
    new_task = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()
    return new_task

def update_task(task_id, title, description, completed):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
            update tasks
            set title = %s, description = %s, completed = %s
            where id = %s returning *
        """,
        (title, description, completed, task_id)
    )
    updated_task = cursor.fetchone()
    conn.commit()
    cursor.close
    conn.close()
    return update_task

def delete_task(task_id):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("delete from tasks where id = %s", (task_id,))
    conn.commit()
    cursor.close()
    conn.close()