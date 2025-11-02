import psycopg2
import sys
from psycopg2 import sql

DB_PARAMS = {
    'dbname': 'session_29',
    'user': 'postgres',
    'password': '',
    'host': 'localhost',
    'port': '5432'
}

def connect():
    try:
        connection = psycopg2.connect(**DB_PARAMS)
        return connection
    except psycopg2.DatabaseError as e:
        print(f"Error during database connection {e}")
        sys.exit(1) # aldaa garwal programm zogsono

def create_table(conn):
    
    create_table_query = """
        CREATE TABLE IF NOT EXISTS users (
            user_id serial primary key,
            name varchar(100) not null,
            email varchar(100) unique not null
            );
    """
    try:
        with conn.cursor() as cur:
            cur.execute(create_table_query)
            conn.commit() # save the change
            print("Table was created successfully.")
    
    except psycopg2.DatabaseError as e:
        print(f"Error during creating database : {e}")
        conn.rollback()

def create_user(conn):
    name = input('Name: ')
    email = input('Email: ')
    insert_query = "INSERT INTO users (name, email) VALUES (%s, %s) RETURNING user_id;"

    try:
        with conn.cursor() as cur:
            cur.execute(insert_query, (name, email))
            user_id = cur.fetchone()[0] # get new user id
            conn.commit()
            print(f"Success: User {user_id} created.")

    except psycopg2.DatabaseError as e:
        conn.rollback()
        print(f"Error occurred {e}")

def print_menu():
    print("\nPostgreSQL CRUD Application:")
    print("1. (CREAT) Creat new user")
    print("2. (READ) Show all user")
    print("3. (UPDATE) Update user email")
    print("4. (DELETE) Delete user")
    print("Q. Exit")
    return input("Choose: (1-4 or Q) ").strip().lower()

def main():
    conn = connect()
    create_table(conn)

    while True:
        choice = print_menu()

        if choice == '1':
            create_user(conn)
        elif choice == '2':
            pass
        elif choice == '3':
            pass
        elif choice == '4':
            pass
        elif choice == 'q':
            print("Exit from application")
            break
        else:
            print("Wrong input: Please try again!!!")

    if conn:
        conn.close()

if __name__ == "__main__":
    main()