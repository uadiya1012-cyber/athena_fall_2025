# def start_cave():
#     print("\n--- Та нэгэн харанхуй агуйд сэрлээ. Таны өмнө хоёр зам байна. ---")
#     print("1. Зүүн тийш, усны чимээ гарч буй хонгил руу явах.")
#     print("2. Баруун тийш, сэвшээ салхи үлээж буй хонгил руу явах.")

#     answer = input("Та хаашаа явах вэ? ")
#     if answer == "1":
#         return waterfall_room
#     elif answer == "2":
#         return exit_room
#     else:
#         print("Буруу сонголт! ДАХИН ОРОЛДОНО УУ.")
#         return start_cave()

# def waterfall_room():
#     print("\nТа зүүн хонгилоор явсаар хүрхрээ тулан ирлээ.")
#     print("Танд хоёр сонголт байна.")
#     print("1. Хүрхрээнээс үсрэн ус руу орох.")
#     print("2. Буцаж алхах хоёр сонголт байна.")

#     answer = input("Та алийг сонгох вэ? ")
#     if answer == "1":
#         return river_room
#     elif answer == "2":
#         return start_cave
#     else:
#         print("Буруу сонголт! ДАХИН ОРОЛДОНО УУ.")
#         return waterfall_room

# def river_room():
#     print("\nТа ус руу унан эргүүлэгт орно.")
#     print("Гарах боломжгүй болсон тул. ТА ЯЛАГДЛАА!")
#     print("Тоглоом дууслаа. ТОГОЛСОНД БАЯРЛАЛАА!")
#     return "game_over"


# def exit_room():
#     print("\nТа баруун хонгилоор явсаар агуйн гарц дээр ирлээ.")
#     print("Гадаа нар туссан, цэвэр агаар үнэртэж байна.")
#     print("Та амжилттай гарлаа. БАЯР ХҮРГЭЕ, ТА ЯЛЛАА!")
#     print("Тогоом дууслаа. ТОГОЛСОНД БАЯРЛАЛАА!")
#     return "win"

# def text_adventure_game():
#     current_room = start_cave
    
#     while current_room != "game_over" or current_room != "win":
#         if current_room == start_cave:
#             current_room = start_cave()
#         elif current_room == exit_room:
#             current_room = exit_room()
#         elif current_room == waterfall_room:
#             current_room = waterfall_room()
#         elif current_room == river_room:
#             current_room = river_room()
#         else:
#             break


# text_adventure_game()