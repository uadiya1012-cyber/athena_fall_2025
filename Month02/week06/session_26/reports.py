import csv

def increase_salary_by_department(target_dept, percentage):
    """
    CSV файлаас ажилчдын мэдээллийг уншиж, 
    тодорхой хэлтсийн ажилчдын цалинг өгөгдсөн хувиар нэмэгдүүлнэ.
    
    Args:
        target_dept (str): Цалин нэмэгдүүлэх хэлтсийн нэр
        percentage (float): Цалин нэмэгдүүлэх хувь
    
    Returns:
        list: Шинэчилсэн ажилчдын мэдээллийн жагсаалт
    """
    data = []
    
    # 1. CSV файлыг унших
    try:
        with open('employees.csv', 'r', encoding='utf-8') as file:
            reader = csv.reader(file)
            headers = next(reader)  # Гарчигийн мөрийг унших
            data.append(headers)
            
            # 2. Мөр бүрийг боловсруулах
            for row in reader:
                name, department, salary = row
                
                # 3. Хэрэв хэлтэс тохирч байвал цалинг нэмэгдүүлэх
                if department == target_dept:
                    current_salary = int(salary)
                    increased_salary = int(current_salary * (1 + percentage / 100))
                    row[2] = str(increased_salary)
                    print(f"💰 {name}-ийн цалинг {increased_salary:,}₮ болгов.")
                
                data.append(row)
                
    except FileNotFoundError:
        print("❌ employees.csv файл олдсонгүй!")
        return None
    except Exception as e:
        print(f"❌ Файл уншихад алдаа гарлаа: {e}")
        return None
    
    return data

def write_updated_data(data, output_filename):
    """
    Шинэчилсэн өгөгдлийг CSV файлд бичих
    
    Args:
        data (list): Шинэчилсэн өгөгдөл
        output_filename (str): Гаралтын файлын нэр
    """
    try:
        with open(output_filename, 'w', encoding='utf-8', newline='') as file:
            writer = csv.writer(file)
            writer.writerows(data)
        print(f"✅ Шинэчилсэн тайланг '{output_filename}' файл руу бичив.")
    except Exception as e:
        print(f"❌ Файл бичихэд алдаа гарлаа: {e}")

# Үндсэн програм
if __name__ == "__main__":
    # Функцийг дуудах
    updated_data = increase_salary_by_department("IT", 15)  # IT хэлтсийн цалинг 15%-иар нэмэгдүүлэх
    
    # Хэрэв өгөгдөл амжилттай уншигдвал шинэ файлд бичих
    if updated_data:
        write_updated_data(updated_data, "employees_updated.csv")
        
        # Шинэчилсэн файлын агуулгыг хэвлэх
        print("\n📊 Шинэчилсэн файлын агуулга:")
        print("-" * 40)
        with open('employees_updated.csv', 'r', encoding='utf-8') as file:
            for line in file:
                print(line.strip())