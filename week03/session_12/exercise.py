#1
#a = int(input("Эхний тоо"))
#b = int(input("Хоёр дахь тоо"))
#sum = a + b
#print (sum)

#2
#birth = int(input("Хэдэн онд төрсөн бэ?"))
#year = 2025
#age = year - birth
#print (f" Та ойролцоогоор {age} настай юм байна.")

#3
#a = float(input("Тэгш өнцөгтийн уртыг оруул:"))
#b = float(input("Тэгш өнцөгтийн өргөнийг оруул:"))
#square = a * b
#print (f" Тэгш өнцөгтийн талбай нь: {square}") 

#4
#C = int(input("Өнөөдөр цельсийн хэдэн хэм байна"))
#F = C * 1.8 + 32
#print (float(f"{F}"))

#5
#price = float(input("Ямар үнэтэй бараа вэ?"))
#how_many = int(input("Хэд хэрэгтэй вэ?"))
#total = price * how_many
#print (total)

#6
#price = int(input("Нийт төлбөрийн дүн "))
#tip = int(input("Хэдэн хувийн гарын мөнгө өгөх вэ? "))
#perecent = tip * price / 100
#total = float(price) + float(perecent)
#print (total)

#7
#height = float(input("Өндөр "))
#weight = int(input("Жин "))
#BMI = weight / (height * height)
#print(f" Таны биеийн жингийн идекс: {BMI}")

#8
#minutes = int(input("Нийт минутыг оруулна уу: "))
#hour = minutes // 60
#min = minutes % 60
#print (f" {minutes} минут нь {hour} цаг {min} минуттай тэнцүү. ")

#9
#radius = int(input("Дугуйн радиусыг оруул "))
#pi = 3.14159
#square = pi * (radius * radius)
#perimeter = 2 * pi * radius
#print (f"""
#====Дугуйн талбай: {square}    ====
#====Дугуйн периметр: {perimeter}  ====
#""")

#10
#num1 = int(input("Эхний тоо: "))
#num2 = int(input("Хоёр дахь тоо: "))
#num3 = int(input("Гурав дахь тоо: "))
#avg = (num1 + num2 + num3) / 3
#print (f"Эдгээр тооны дундаж: {avg}")

#11
#currency = int(input("Төгрөгийн дүнгээ оруулна уу: "))
#USD = 3450
#converter = currency / USD 
#print (f"{currency}₮ нь ойролцоогоор {converter} USD болно. ")

#12
#Debit = int(input("Анхны үлдэгдлээ оруулна уу: "))
#Credit = int(input("Зарцуулсан дүнгээ оруулна уу: "))
#Balance = Debit - Credit
#print (f"Таны эцсийн үлдэгдэл {Balance}₮ ")

#13
#Loan = int(input("Зээлийн үндсэн дүнг оруулна уу: "))
#interest = int(input("Жилийн хүүг хувиар оруулна уу: "))
#term = int(input("Хугацааг жилээр оруулна уу: "))
#balance = interest = Loan * (interest / 100) * term
#print (f"Нийт төлөх хүүний хэмжээ: {balance}₮ ")

#14
#age = int(input("Насаа оруулна уу: "))
#year = 12
#convert = age * year
#print (f"Та ойролцоогоор {convert} сар амьдарсан байна. ")

#15
#num = int(input("Бүхэл тоо оруулна уу: "))
#modulus = num % 2
#print (f"{num} тоог 2-т хуваахад {modulus} үлдэнэ. ")

#16
# length = int(input("Өрөөний урт (м): "))
# width = int(input("Өрөөний өргөн (м): "))
# heigth = int(input("Өрөөний өндөр (м): "))
# square = 2 * (length + width) * heigth
# color = square / 10
# print (f"""
# Нийт ханын талбай: {square} м.кв
# Шаардлагатай будгийн хэмжээ: {color} литр
#        """)

#17

# distance = int(input("Явах замын урт km: "))
# speed = int(input("Дундаж хурд km/цаг: "))
# time = distance / speed
# print(f"{distance} км замыг {speed} км/цаг хурдтайгаар {time} цагт туулна.")

#18

# investment = int(input("Анхны хөрөнгө оруулалтын дүн: "))
# interest = int(input("Жилийн хүү: "))
# term = int(input("Хэдэн жилийн хугацаанд: "))
# result = investment * (1 + interest / 100) ** term
# print(f"{term} жилийн дараа таны хөрөнгө оруулалт {result}₮ болж өснө. ")

#19

# number = int(input("3 оронтой тоо оруулна уу: "))
# hundredth = 7
# decimal = 8
# unit = 9
# print(f"""
# Зуутын орон: {hundredth}
# Аравтын орон: {decimal}
# Нэгжийн орон: {unit}
# """)



#20

# noun = input("Тэмдэг нэр оруулна уу: ")
# adjective = input("Нэр үг оруулна уу: ")
# verb = input("Өнгөрсөн цаг дээрх үйл үг оруулна уу: ")
# number = int(input("Тоо оруулна уу: "))
# print(f"Нэгэн {noun} өдөр, {adjective} нэртэй баатар {number} ширхэг луутай {verb}. ")



