#!/usr/bin/env python3
"""
gradebook.py
Tkinter desktop app to add/list/delete student grades stored in PostgreSQL.
"""

import tkinter as tk
from tkinter import ttk, messagebox
import psycopg2
from psycopg2 import sql, extras

# ----------------------
# Configuration: өөрчилж оруулна уу
# ----------------------
DB_CONFIG = {
    "host": "localhost",
    "port": 5432,
    "database": "school_db",
    "user": "postgres",
    "password": ""
}

# ----------------------
# DB connection helper
# ----------------------
def get_connection():
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        return conn
    except Exception as e:
        messagebox.showerror("DB Connection Error", f"PostgreSQL-тай холбогдоход алдаа гарлаа:\n{e}")
        return None

# ----------------------
# Main App
# ----------------------
class GradebookApp:
    def __init__(self, root):
        self.root = root
        root.title("Сурагчийн Дүнгийн Бүртгэл (Gradebook)")
        root.geometry("800x450")
        root.resizable(False, False)

        self.create_widgets()
        self.load_data()

    def create_widgets(self):
        # Left frame - form
        left = ttk.Frame(self.root, padding=10)
        left.grid(row=0, column=0, sticky="nsw")

        # Search (bonus)
        ttk.Label(left, text="Нэрээр хайх:").grid(row=0, column=0, sticky="w")
        self.search_var = tk.StringVar()
        search_entry = ttk.Entry(left, textvariable=self.search_var)
        search_entry.grid(row=0, column=1, pady=4, sticky="we")
        search_entry.bind("<KeyRelease>", lambda e: self.load_data())

        # Student name
        ttk.Label(left, text="Сурагчийн Нэр:").grid(row=1, column=0, sticky="w", pady=(8,0))
        self.name_var = tk.StringVar()
        ttk.Entry(left, textvariable=self.name_var, width=30).grid(row=1, column=1, pady=(8,0))

        # Subject combobox
        ttk.Label(left, text="Хичээл:").grid(row=2, column=0, sticky="w", pady=(8,0))
        self.subject_var = tk.StringVar()
        self.subject_combo = ttk.Combobox(left, textvariable=self.subject_var, values=[
            "Математик", "Физик", "Англи хэл", "Биологи", "Хими", "Газарзүй"
        ], state="readonly", width=27)
        self.subject_combo.grid(row=2, column=1, pady=(8,0))
        self.subject_combo.set("Математик")

        # Score
        ttk.Label(left, text="Дүн (0-100):").grid(row=3, column=0, sticky="w", pady=(8,0))
        self.score_var = tk.StringVar()
        ttk.Entry(left, textvariable=self.score_var, width=30).grid(row=3, column=1, pady=(8,0))

        # Buttons
        btn_frame = ttk.Frame(left)
        btn_frame.grid(row=4, column=0, columnspan=2, pady=12)

        add_btn = ttk.Button(btn_frame, text="Бүртгэх", command=self.add_grade)
        add_btn.grid(row=0, column=0, padx=6)
        # greener look: use style
        style = ttk.Style()
        style.configure("Green.TButton", foreground="white", background="#0a7f2b")
        add_btn.configure(style="Green.TButton")

        del_btn = ttk.Button(btn_frame, text="Устгах", command=self.delete_grade)
        del_btn.grid(row=0, column=1, padx=6)
        style.configure("Red.TButton", foreground="white", background="#b22222")
        del_btn.configure(style="Red.TButton")

        # Right frame - treeview
        right = ttk.Frame(self.root, padding=10)
        right.grid(row=0, column=1, sticky="nsew")

        columns = ("id", "student_name", "subject", "score")
        self.tree = ttk.Treeview(right, columns=columns, show="headings", height=18)
        self.tree.heading("id", text="ID")
        self.tree.heading("student_name", text="Нэр")
        self.tree.heading("subject", text="Хичээл")
        self.tree.heading("score", text="Дүн")

        # column widths
        self.tree.column("id", width=40, anchor="center")
        self.tree.column("student_name", width=200)
        self.tree.column("subject", width=120, anchor="center")
        self.tree.column("score", width=80, anchor="center")

        vsb = ttk.Scrollbar(right, orient="vertical", command=self.tree.yview)
        self.tree.configure(yscroll=vsb.set)
        self.tree.grid(row=0, column=0, sticky="nsew")
        vsb.grid(row=0, column=1, sticky="ns")

        # Treeview tags for coloring (bonus)
        self.tree.tag_configure('low', foreground='red')
        self.tree.tag_configure('ok', foreground='black')

        # double-click to populate form for quick edit (optional)
        self.tree.bind("<Double-1>", self.on_tree_double_click)

    # ----------------------
    # CRUD operations
    # ----------------------
    def add_grade(self):
        name = self.name_var.get().strip()
        subject = self.subject_var.get().strip()
        score_raw = self.score_var.get().strip()

        # Validation
        if not name:
            messagebox.showwarning("Validation", "Сурагчийн нэрийг оруулна уу.")
            return
        if not subject:
            messagebox.showwarning("Validation", "Хичээлийг сонгоно уу.")
            return
        try:
            score = int(score_raw)
        except ValueError:
            messagebox.showwarning("Validation", "Дүн нь бүхэл тоо байх ёстой.")
            return
        if not (0 <= score <= 100):
            messagebox.showwarning("Validation", "Дүн 0-ээс 100-ын хооронд байх ёстой.")
            return

        conn = get_connection()
        if conn is None:
            return
        try:
            with conn:
                with conn.cursor() as cur:
                    cur.execute(
                        "INSERT INTO grades (student_name, subject, score) VALUES (%s, %s, %s) RETURNING id",
                        (name, subject, score)
                    )
                    new_id = cur.fetchone()[0]
            messagebox.showinfo("Амжилт", f"Шинэ дүн амжилттай нэмэгдлээ (ID: {new_id}).")
            self.clear_form()
            self.load_data()
        except psycopg2.Error as e:
            messagebox.showerror("DB Error", f"Баз руу бичихэд алдаа гарав:\n{e}")
        finally:
            conn.close()

    def load_data(self):
        # clear tree
        for row in self.tree.get_children():
            self.tree.delete(row)

        search_text = self.search_var.get().strip()
        conn = get_connection()
        if conn is None:
            return
        try:
            with conn.cursor(cursor_factory=extras.DictCursor) as cur:
                if search_text:
                    cur.execute(
                        "SELECT id, student_name, subject, score FROM grades WHERE student_name ILIKE %s ORDER BY id DESC",
                        (f"%{search_text}%",)
                    )
                else:
                    cur.execute("SELECT id, student_name, subject, score FROM grades ORDER BY id DESC")
                rows = cur.fetchall()
                for r in rows:
                    # use DB id as item iid so we can easily find it
                    tag = 'low' if r['score'] is not None and r['score'] < 60 else 'ok'
                    self.tree.insert("", "end", iid=str(r['id']), values=(r['id'], r['student_name'], r['subject'], r['score']), tags=(tag,))
        except psycopg2.Error as e:
            messagebox.showerror("DB Error", f"Баз-аас уншихад алдаа гарлаа:\n{e}")
        finally:
            conn.close()

    def delete_grade(self):
        sel = self.tree.selection()
        if not sel:
            messagebox.showwarning("Сонгоно уу", "Устгах мөрийг сонгоно уу.")
            return
        iid = sel[0]
        try:
            iid_int = int(iid)
        except ValueError:
            messagebox.showerror("Алдаа", "Сонгосон мөрийн ID олдсонгүй.")
            return

        if not messagebox.askyesno("Баталгаажуулалт", "Та энэ өгөгдлийг устгахдаа итгэлтэй байна уу?"):
            return

        conn = get_connection()
        if conn is None:
            return
        try:
            with conn:
                with conn.cursor() as cur:
                    cur.execute("DELETE FROM grades WHERE id = %s", (iid_int,))
                    if cur.rowcount == 0:
                        messagebox.showinfo("Мэдээлэл", "Ийм ID-тэй мөр олдсонгүй.")
                    else:
                        messagebox.showinfo("Амжилт", "Мөр амжилттай устлаа.")
            self.load_data()
        except psycopg2.Error as e:
            messagebox.showerror("DB Error", f"Баз-аас устгахад алдаа гарлаа:\n{e}")
        finally:
            conn.close()

    # optional: populate form when double-click row (to allow quick add/edit flow)
    def on_tree_double_click(self, event):
        sel = self.tree.selection()
        if not sel:
            return
        iid = sel[0]
        item = self.tree.item(iid)
        vals = item.get("values", [])
        if vals:
            # values order: id, student_name, subject, score
            _, name, subject, score = vals
            self.name_var.set(name)
            self.subject_var.set(subject)
            self.score_var.set(str(score))

    def clear_form(self):
        self.name_var.set("")
        self.score_var.set("")
        # keep subject selected as-is or reset:
        # self.subject_var.set("Математик")

# ----------------------
# Run
# ----------------------
def main():
    root = tk.Tk()
    app = GradebookApp(root)
    root.mainloop()

if __name__ == "__main__":
    main()
