import tkinter as tk
from tkinter import ttk, messagebox
import psycopg2
import sys


DB_URL = "postgresql://postgres@localhost:5432/techzone"


def get_connection():

    try:
        conn = psycopg2.connect(DB_URL)
        return conn
    except Exception as e:
        print("DB connection error:", e, file=sys.stderr)
        return None

root = tk.Tk()
root.title("TechZone - Бараа бүртгэх")
root.resizable(False, False)
padx = 10
pady = 8


lbl_name = tk.Label(root, text="Барааны Нэр:")
lbl_name.grid(row=0, column=0, sticky="e", padx=padx, pady=pady)
entry_name = tk.Entry(root, width=40)
entry_name.grid(row=0, column=1, padx=padx, pady=pady)

lbl_price = tk.Label(root, text="Үнэ ($):")
lbl_price.grid(row=1, column=0, sticky="e", padx=padx, pady=pady)
entry_price = tk.Entry(root, width=40)
entry_price.grid(row=1, column=1, padx=padx, pady=pady)

lbl_category = tk.Label(root, text="Төрөл:")
lbl_category.grid(row=2, column=0, sticky="e", padx=padx, pady=pady)

category_values = []
category_name_to_id = {}

combobox_category = ttk.Combobox(root, values=category_values, state="readonly", width=37)
combobox_category.grid(row=2, column=1, padx=padx, pady=pady)

def load_categories_into_combobox():

    conn = get_connection()
    if not conn:
        combobox_category['values'] = []
        return
    try:
        with conn.cursor() as cur:
            cur.execute("SELECT id, name FROM categories ORDER BY id;")
            rows = cur.fetchall()
            names = [r[1] for r in rows]
            name_to_id = {r[1]: r[0] for r in rows}
            combobox_category['values'] = names

            if names:
                combobox_category.current(0)

            global category_name_to_id
            category_name_to_id = name_to_id
    except Exception as e:
        print("Failed to load categories:", e, file=sys.stderr)
    finally:
        conn.close()


def save_product():
    name = entry_name.get().strip()
    price_text = entry_price.get().strip()
    category_name = combobox_category.get().strip()


    if not name or not price_text or not category_name:
        messagebox.showwarning("Анхаар", "Бүх талбарыг бөглөнө үү.")
        return

    try:
        price = int(price_text)
    except ValueError:
        messagebox.showwarning("Алдаа", "Үнэ нь зөвхөн бүхэл тоон байх ёстой.")
        return

    if category_name not in category_name_to_id:
        messagebox.showwarning("Алдаа", "Сонгосон төрөл олдсонгүй. Category-ийг дахин ачаална уу.")
        return
    category_id = category_name_to_id[category_name]

    conn = get_connection()
    if not conn:
        messagebox.showerror("Алдаа", "Өгөгдлийн сантай холбогдоход алдаа гарлаа.")
        return

    try:
        with conn.cursor() as cur:

            cur.execute(
                "INSERT INTO products (name, price, category_id) VALUES (%s, %s, %s);",
                (name, price, category_id)
            )
        conn.commit()
    except Exception as e:
        
        try:
            conn.rollback()
        except:
            pass
        messagebox.showerror("Алдаа", f"Бүртгэх үед алдаа гарлаа:\n{e}")
        print("Insert error:", e, file=sys.stderr)
    else:
    
        entry_name.delete(0, tk.END)
        entry_price.delete(0, tk.END)

        if combobox_category['values']:
            combobox_category.current(0)
        messagebox.showinfo("Мэдээлэл", "Амжилттай хадгаллаа.")
    finally:
        conn.close()

btn_save = tk.Button(root, text="Бараа Бүртгэх", command=save_product,
                    background="#2e7d32", fg="white", font=("TkDefaultFont", 11, "bold"))
btn_save.grid(row=3, column=0, columnspan=2, sticky="we", padx=padx, pady=(pady+4, pady+8))


for child in root.winfo_children():
    child.grid_configure(padx=5, pady=5)

load_categories_into_combobox()

if __name__ == "__main__":
    root.mainloop()
