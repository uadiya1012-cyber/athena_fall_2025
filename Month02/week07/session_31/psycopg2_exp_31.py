# Унших материал: Python psycopg2 сангийн Танилцуулга.

# Алхам 1: Холболт үүсгэх
# psycopg2.connect() функэд нууц үг хэрэглэгчийн нэр database -ийн
# нэрийг дамжуулна.

import psycopg2
from psycopg2 import Error

try:
    conn = psycopg2.connect(
        host="localhost",
        database="your_db_name",
        user="postgres",
        password="your_password"
    )
except Error as e:
    print("Холболтын алдаа", e)


# Алхам 2: Cursor үүсгэх.
# Холболтын объектоос cursor-г үүсгэнэ.

cursor = conn.sursor()

# Алхам 3: Query гүйцэтгэх.
# cursor.execute()-д SQL команд дамжуулна.

cursor.execute("select name, salary from employees where salary > 3000000;")

# Алхам 4: Үр дүнг хүлээн авах.
# Нэг мөр: record = cursor.fetchone() (Үр дүн tuple хэлбэрээр буцаж ирнэ).
# Олон мөр: record = cursor.fetchall() (Үр дүн tuple үүдээс бүрдсэн list хэлбэрээр буцаж ирнэ).

# Алхам 5: Холболтыг хаах (Үргэлж хийх)
# Код ажжиллаж дууссаны дараа нөөцөө суллахын тулд cursor болон connection-г хаана.

cursor.close()
conn.close()


# INSERT, UPDATE, DELETE - Өөрчлөлтийг Хадгалах

sql_update = "update employees set salary = 4000000 where id = 1;"
cursor.execute(sql_update)
conn.commit()

# Parameterized Queries

# Хэрэглэж болохгүй аюулай!
user_input = "2 OR 1=1"
sql = "select * from users where id = " + user_input # Аюултай!

# Аюулгүй арга.

user_id = 2
# %s нь утга орж ирэх зайг заана.
safe_sql = "select * from user where id = %s;"

# Утгийг tuple хэлбэрээр тусад нь дамжуулна.
cursor.execute(safe_sql, (user_id))