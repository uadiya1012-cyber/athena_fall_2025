import tkinter as tk
from tkinter import ttk, messagebox
import database

selected_category = None
tree = None
cat_name = None

def clear_form():
    global selected_category
    selected_category = None
    cat_name.delete(0, tk.END)

def populate_list():
    for item in tree.get_children():
        tree.delete(item)

        categories = database.fetch_categories()
        for name in categories:
            tree.insert("", tk.END, values=name)

def loud_categories():
    global selected_category

    selected = tree.selection()
    if not selected:
        return
    
    cat_id = selected[0]
    values = tree.item(cat_id, "values")
    selected_category = int(values[0])
    cat_name.delete(0, tk.END)
    cat_name.insert(0, values[1])

def add_item():
    cname = cat_name.get().strip()

    if not cname:
        messagebox.showerror("Алдаа", "Талбарыг бөглөнө үү.")
        return
    database.categories_insert(cname)
    messagebox.showinfo("Амжилттай")
    clear_form()
    populate_list()


def build_gui():
    global tree, cat_name

    window = tk.Tk()
    window.title("Цонхтой харьцах хэсэг")
    window.geometry('650x450')

    frame = ttk.Labelframe(window, text="Нэр")
    frame.pack(padx=10, pady=10, fill="x")

    ttk.Label(frame, text="Нэр:").grid(row=0, column=0, padx=5, pady=5, sticky="e")
    cat_name = ttk.Entry(frame, width=25)
    cat_name.grid(row=0, column=1, padx=5, pady=5)

    btn_frame = ttk.Frame(frame)
    btn_frame.grid(row=3, column=0, columnspan=2, pady=10)

    ttk.Button(btn_frame, text="Нэмэх", width=12, command=add_item).grid(row=0, column=0, padx=5)
    ttk.Button(btn_frame, text="Шинэчлэх", width=12, command=add_item).grid(row=0, column=1, padx=5)
    ttk.Button(btn_frame, text="Устгах", width=12, command=add_item).grid(row=0, column=2, padx=5)
    ttk.Button(btn_frame, text="Форм цэвэрлэх", width=12, command=add_item).grid(row=0, column=3, padx=5)

    table_frame = ttk.Frame(window)
    table_frame.pack(fill="both", expand=True, padx=10, pady=10)

    columns = ("name")
    tree = ttk.Treeview(table_frame, columns=columns, show="headings")

    tree.heading("name", text="name")

    tree.column("name", width=50, anchor="center")

    scroll = ttk.Scrollbar(table_frame, orient="vertical", command=tree.yview)
    tree.configure(yscrollcommand=scroll.set)

    tree.pack(side="left", fill="both", expand=True)
    scroll.pack(side="right", fill="y")

    tree.bind("<<TreeviewSelect>>", loud_categories)

    database.create_categories()
    database.create_expenses()
    populate_list()

    window.mainloop()

if __name__ == "__main__":
    build_gui()