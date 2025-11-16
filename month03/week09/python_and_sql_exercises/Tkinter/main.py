import tkinter as tk
from tkinter import ttk, messagebox

import database

selected_employee_id = None
tree = None
ent_fname = None
ent_lname = None
ent_email = None

def clear_form():
    global selected_employee_id
    selected_employee_id = None
    ent_fname.delete(0, tk.END)
    ent_lname.delete(0, tk.END)
    ent_email.delete(0, tk.END)

def populate_list():
    for item in tree.get_children():
        tree.delete(item)

    employees = database.fetch_employees()
    for emp in employees:
        tree.insert("", tk.END, values=emp)


def loud_selected_item(event):
    global selected_employee_id

    selected = tree.selection()
    if not selected:
        return
    
    item_id = selected[0]
    values = tree.item(item_id, "values")
    selected_employee_id = int(values[0])

    ent_fname.delete(0, tk.END)
    ent_lname.delete(0, tk.END)
    ent_email.delete(0, tk.END)

    ent_fname.insert(0, values[1])
    ent_lname.insert(0, values[2])
    ent_email.insert(0, values[3])

def add_item():
    fname = ent_fname.get().strip()
    lname = ent_lname.get().strip()
    email = ent_email.get().strip()

    if not fname or not lname or not email:
        messagebox.showerror("Алдаа", "Бүх талбарыг бөглөнө үү.")
        return
    
    database.add_employee(fname, lname, email)
    messagebox.showinfo("Амжилттай", "Ажилтан амжилттай нэмэгдлээ.")
    clear_form()
    populate_list()


def update_item():
    global selected_employee_id

    if selected_employee_id is None:
        messagebox.showerror("Алдаа", "Эхлээд хүснэгтээс ажилтан сонгоно уу.")
        return
    
    fname = ent_fname.get().strip()
    lname = ent_lname.get().strip()
    email = ent_email.get().strip()

    database.update_employee(selected_employee_id, fname, lname, email)

    messagebox.showinfo("Амжилттай", "Ажилтаны мэдээлэл амжилттай шинчлэгдлээ.")
    clear_form()
    populate_list()

def delete_item():
    global selected_employee_id

    if selected_employee_id is None:
        messagebox.showerror("Алдаа", "Эхлээд хүснэгтээс ажилтан сонгоно уу.")
        return
    
    if not messagebox.askyesno("Баталгаажуулалт", "Энэ ажилтаныг устгах даа итгэлтэй байна уу?"):
        return

    
    database.delete_employee(selected_employee_id)
    messagebox.showinfo("Амжилттай", "Ажилтан амжилттай устлаа.")
    clear_form()
    populate_list()

def build_gui():
    global tree, ent_fname, ent_lname, ent_email

    window = tk.Tk()
    window.title("Анхны цонхтой харьцах хэсэг.")
    window.geometry('650x450')

    frame = ttk.LabelFrame(window, text="Ажилтны мэдээлэл.")
    frame.pack(padx=10, pady=10, fill="x")

    ttk.Label(frame, text="Нэр:").grid(row=0, column=0, padx=5, pady=5, sticky="e")
    ent_fname = ttk.Entry(frame, width=25)
    ent_fname.grid(row=0, column=1, padx=5, pady=5)

    ttk.Label(frame, text="Овог:").grid(row=1, column=0, padx=5, pady=5, sticky="e")
    ent_lname = ttk.Entry(frame, width=25)
    ent_lname.grid(row=1, column=1, padx=5, pady=5)

    ttk.Label(frame, text="И-мэйл:").grid(row=2, column=0, padx=5, pady=5, sticky="e")
    ent_email = ttk.Entry(frame, width=25)
    ent_email.grid(row=2, column=1, padx=5, pady=5)

    btn_frame = ttk.Frame(frame)
    btn_frame.grid(row=3, column=0, columnspan=2, pady=10)

    ttk.Button(btn_frame, text="Нэмэх", width=12, command=add_item).grid(row=0, column=0, padx=5)
    ttk.Button(btn_frame, text="Шинэчлэх", width=12, command=add_item).grid(row=0, column=1, padx=5)
    ttk.Button(btn_frame, text="Устгах", width=12, command=add_item).grid(row=0, column=2, padx=5)
    ttk.Button(btn_frame, text="Форм цэвэрлэх", width=12, command=add_item).grid(row=0, column=3, padx=5)

    table_frame = ttk.Frame(window)
    table_frame.pack(fill="both", expand=True, padx=10, pady=10)

    columns = ("id", "first_name", "last_name", "email")
    tree = ttk.Treeview(table_frame, columns=columns, show="headings")

    tree.heading("id", text="ID")
    tree.heading("first_name", text="Нэр")
    tree.heading("last_name", text="Овог")
    tree.heading("email", text="И-мэйл")

    tree.column("id", width=50, anchor="center")
    tree.column("first_name", width=150)
    tree.column("last_name", width=150)
    tree.column("email", width=200)

    scroll = ttk.Scrollbar(table_frame, orient="vertical", command=tree.yview)
    tree.configure(yscrollcommand=scroll.set)

    tree.pack(side="left", fill="both", expand=True)
    scroll.pack(side="right", fill="y")

    tree.bind("<<TreeviewSelect>>", loud_selected_item)

    database.create_table_if_not_exists()
    populate_list()

    window.mainloop()

if __name__ == "__main__":
    build_gui()











