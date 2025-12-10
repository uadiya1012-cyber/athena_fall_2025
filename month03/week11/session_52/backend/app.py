import tkinter as tk
from tkinter import messagebox
import psycopg2

DB_URL = "postgresql://postgres:@localhost:5432/techzone"

# connection function

def get_connection():
    try:
        return psycopg2.connect(DB_URL)
    except Exception as e:
        messagebox.showerror("Error", f"Connection failed: {e}")
        return None

# Save data function    
def save_product():
    name = entry_name.get()
    price = entry_price.get()
    cat_id = entry_cat.get()

    if not name or not price or not cat_id:
        messagebox.showwarning("Attention", "Fill all the fields")
        return
    
    conn = get_connection()
    if conn:
        with conn.cursor() as cur:
            try:
                cur.execute("insert into products (name, price, category_id) values (%s, %s, %s)", (name, price, cat_id))
                conn.commit()
                messagebox.showinfo("Success", f"{name} added!")
                entry_name.delete(0, tk.END)
                entry_price.delete(0, tk.END)
                entry_cat.delete(0, tk.END)
            except Exception as e:
                messagebox.showerror("SQL Error", str(e))

        conn.close()




# gui - Tkinter construction
root = tk.Tk()
root.title('Techzone - Product Maneger')
root.geometry('400x300')

# Row 00

tk.Label(root, text="Product Name: ", font=("Arial", 20)).grid(row=0, column=0, padx=10, pady=10)
entry_name = tk.Entry(root, font=("Arial", 12))
entry_name.grid(row=0, column=1, padx=10, pady=10)

#row1
tk.Label(root, text="Price ($): ", font=("Arial", 20)).grid(row=1, column=0, padx=10, pady=10)
entry_price = tk.Entry(root, font=("Arial", 12))
entry_price.grid(row=1, column=1, padx=10, pady=10)

#row2
tk.Label(root, text="Category ID (1-3): ", font=("Arial", 20)).grid(row=2, column=0, padx=10, pady=10)
entry_cat = tk.Entry(root, font=("Arial", 12))
entry_cat.grid(row=2, column=1, padx=10, pady=10)

# row4 save buttom
btn_save = tk.Button(root, text="Product Register", bg="#28a745", fg="white", font=("Arial", 12, "bold"), command=save_product)
btn_save.grid(row=3, column=0, columnspan=2, pady=20, ipadx=20)



root.mainloop()