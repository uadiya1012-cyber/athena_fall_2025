#1

# def calculate(num1_input, num2_input, op_input):
#     if op_input == 'add':
#         result = num1_input + num2_input
#     elif op_input == 'subtract':
#         result = num1_input - num2_input
#     elif op_input == 'multiply':
#         result = num1_input * num2_input
#     elif op_input == 'divide':
#         result = num1_input / num2_input
#     else:
#         pass
#     return float(result)
    
#     # TODO

# # --- Хэрэглэгчээс утга авах ---
# try:
#     num1_input = float(input("Эхний тоог оруул: "))
#     num2_input = float(input("Хоёр дахь тоог оруул: "))
#     op_input = input("Үйлдлийг оруул (add, subtract, multiply, divide): ")

#     result = calculate(num1_input, num2_input, op_input)
#     print(f"Үр дүн: {result}")

# except ValueError:
#     print("Алдаа: Та тоо оруулна уу.")


#2
# def greet(name, greeting="Сайн уу"):

#     return f"{greeting}, {name}!"

# # --- Хэрэглэгчээс утга авах ---
# name_input = input("Таны нэр хэн бэ?: ")
# greeting_input = input("Мэндчилгээ оруул (Хоосон бол 'Сайн уу' гэж гарна): ")

# if greeting_input:
#     # Хэрэглэгч ямар нэг зүйл бичсэн бол
#     print(greet(name_input, greeting=greeting_input))
# else:
#     # Хэрэглэгч юу ч бичэлгүй Enter дарсан бол
#     print(greet(name_input))



#3
# def convert_temp(temp_input, unit_input):
#     if unit_input == "F":
#         convert_temp = (temp_input - 32) * 5/9
#         return f"{temp_input}°F нь {convert_temp:.1f}°C"

#     elif unit_input == "C":
#         convert_temp = (temp_input * 9/5) + 32
#         return f"{temp_input}°C нь {convert_temp:.1f}°F"

#     # TODO


# # --- Хэрэглэгчээс утга авах ---
# try:
#     temp_input = float(input("Хөрвүүлэх температураа оруул: "))
#     unit_input = input("Оруулсан нэгжээ сонгоно уу (C эсвэл F): ")

#     result_text = convert_temp(temp_input, unit_input)
#     print(result_text)

# except ValueError:
#     print("Алдаа: Температур тоо байх ёстой.")


#4

# def analyze_list(numbers):

#     total = sum(numbers)
#     avg = total / len(numbers)
#     maxi = max(numbers)
    
#     return total, avg, maxi

# # --- Хэрэглэгчээс утга авах ---
# input_str = input("Таслалаар тусгаарласан тоонуудаа оруул (ж.нь: 10, 20, 30): ")

# try:
#     # 1. "10, 20, 30" -> ["10", " 20", " 30"]
#     str_list = input_str.split(',')
    
#     # 2. ["10", " 20", " 30"] -> [10.0, 20.0, 30.0]
#     num_list = [float(num.strip()) for num in str_list] 

#     if num_list:
#         total, avg, maxi = analyze_list(num_list)
#         print(f"Таны жагсаалт: {num_list}")
#         print(f"Нийлбэр: {total}")
#         print(f"Дундаж: {avg}")
#         print(f"Хамгийн их: {maxi}")
#     else:
#         print("Хоосон жагсаалт байна.")
        
# except ValueError:
#     print("Алдаа: Зөвхөн тоо болон таслал оруулна уу.")

#5

# def create_email(data):

#     first_name = data['first_name'][0].lower()
#     last_name = data['last_name'].lower() 
#     email = f"{first_name}{last_name}@yahoo.com"
#     return email

# # --- Хэрэглэгчээс утга авах ---
# first = input("Нэрээ оруулна уу: ")
# last = input("Овгоо оруулна уу: ")

# # Хэрэглэгчийн мэдээллийг толь бичиг болгох
# person_data = {
#     'first_name': first.strip(), # .strip() нь илүүдэл зайг арилгана
#     'last_name': last.strip()
# }

# email_address = create_email(person_data)
# print(f"Таны и-мэйл хаяг: {email_address}")



    


