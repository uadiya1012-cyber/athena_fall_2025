import psycopg2
from psycopg2 import sql
import os

DB_URL = {
    'dbname': 'student_grades',
    'user': 'postgres',
    'password': '',
    'host': 'localhost',
    'port': 5432
}

def get_db_connection():
    conn = psycopg2.connect(**DB_URL)
    return conn

def init_database():
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            subject VARCHAR(100) NOT NULL,
            grade INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT grade_check CHECK (grade >= 0 AND grade <= 100)
        );

    """)

    conn.commit()
    cur.close()
    conn.close()


def get_all_students():
    """
    Бүх оюутнуудыг авах

    Returns:
        List of student dictionaries

    Example:
        [
            {'id': 1, 'name': 'Болд', 'subject': 'Python', 'grade': 95},
            {'id': 2, 'name': 'Сарнай', 'subject': 'JavaScript', 'grade': 88}
        ]
    """

    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("select * from students order by id;")
    students = cur.fetchall()

    result = []
    for student in students:
        result.append({
            'id': student[0],
            'name': student[1],
            'subject': student[2],
            'grade': student[3],
            'created_at': student[4].isoformat() if student[4] else None
        })

    cur.close()
    conn.close()
    return result

def create_student(name, subject, grade):
    """
    Шинэ оюутан үүсгэх

    Args:
        name: Оюутны нэр
        subject: Хичээлийн нэр
        grade: Дүн (0-100)

    Returns:
        Шинэ үүссэн оюутны dictionary

    Example:
        create_student('Төмөр', 'React', 90)
        → {'id': 6, 'name': 'Төмөр', 'subject': 'React', 'grade': 90, ...}
    """
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute(
        """
        insert into students (name, subject, grade)
        values (%s, %s, %s)
        returning *
    """, (name, subject, grade))

    student = cur.fetchone()
    conn.commit()

    result = {
        'id': student[0],
        'name': student[1],
        'subject': student[2],
        'grade': student[3],
        'created_at': student[4].isoformat() if student[4] else None
    }

    cur.close()
    conn.close()
    return result


def update_student(student_id, name, subject, grade):
    """
    Оюутны мэдээлэл шинэчлэх

    Args:
        student_id: Оюутны ID
        name: Шинэ нэр
        subject: Шинэ хичээл
        grade: Шинэ дүн

    Returns:
        Шинэчлэгдсэн оюутны dictionary
    """

    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        update students
        set name = %s, subject = %s, grade = %s
        where id = %s
        returning *
    """, (name, subject, grade, student_id))

    student = cur.fetchone()
    if not student:
        cur.close()
        conn.close()
        return None
    
    conn.commit()

    result = {
        'id': student[0],
        'name': student[1],
        'subject': student[2],
        'grade': student[3],
        'created_at': student[4].isoformat() if student[4] else None
    }

    cur.close()
    conn.close()
    return result

def delete_student(student_id):
    """
    Оюутан устгах

    Args:
        student_id: Оюутны ID
    """

    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("delete from students where id = %s", (student_id,))

    deleted = cur.rowcount > 0
    conn.commit()

    cur.close()
    conn.close()
    return deleted

init_database()
    