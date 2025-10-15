# contacts = {}

# def display_menu():
#     print("\n--- Холбоо барих мэдээллийн сан ---")
#     print("1. Шинэ контакт нэмэх")
#     print("2. Бүх контакт харах")
#     print("3. Гарах")
    

# def add_contact(contacts):
#     name = input("Нэрээ оруулна уу: ")
#     phone = input("Утасны дугаараа оруулна уу: ")
#     contacts[name] = phone
#     print(f"{name} Амжилттай нэмэгдлээ.")

# def view_all_contacts(contacts):
#     if not contacts:
#         print("Контакт байхгүй.")
#     else:    
#         print("\n--- Таны контактууд ---")
#         for name, phone in contacts.items():
#             print(f"Нэр: {name}, Утас: {phone}")

# def contact_manager():
#     while True:
#         display_menu()
#         choice = input("Сонголтоо хийнэ үү (1-3): ")
#         if choice == "1":
#             add_contact(contacts)
#         elif choice == "2":
#             view_all_contacts(contacts)
#         elif choice == "3":
#             print("Програмаас гарлаа. Баяртай!")
#             break
#         else:
#             pass

# contact_manager()