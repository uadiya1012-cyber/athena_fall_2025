import tkinter as tk
from tkinter import messagebox

from database import insert_product   # ← database.py-аас функц дуудаж байна


def save_product():
    name = entry_name.get()
    price = entry_price.get()

    if not name or not price:
        messagebox.showwarning("Анхаар", "Бүх талбарыг бөглөнө үү!")
        return

    # Үнэ тоон утга эсэхийг шалгах
    try:
        price_int = int(price)
    except ValueError:
        messagebox.showwarning("Алдаа", "Үнэ талбарт зөвхөн тоо оруулна уу!")
        return

    success = insert_product(name, price_int)

    if success:
        messagebox.showinfo("Амжилттай", "Бараа амжилттай хадгалагдлаа!")
        entry_name.delete(0, tk.END)
        entry_price.delete(0, tk.END)
    else:
        messagebox.showerror("Алдаа", "Өгөгдлийн санд хадгалахад алдаа гарлаа.")


# ---------------- GUI ----------------
root = tk.Tk()
root.title("GamerGear Manager")

title = tk.Label(root, text="GamerGear Manager", font=("Arial", 18))
title.grid(row=0, column=0, columnspan=2, pady=10)

label_name = tk.Label(root, text="Барааны нэр:")
label_name.grid(row=1, column=0, padx=10, pady=5)

entry_name = tk.Entry(root)
entry_name.grid(row=1, column=1, padx=10, pady=5)

label_price = tk.Label(root, text="Үнэ ($):")
label_price.grid(row=2, column=0, padx=10, pady=5)

entry_price = tk.Entry(root)
entry_price.grid(row=2, column=1, padx=10, pady=5)

btn_save = tk.Button(root, text="Хадгалах", bg="green", fg="white", command=save_product)
btn_save.grid(row=3, column=0, columnspan=2, pady=10)

root.mainloop()
