# import random
# board_size = 10
# number_of_turns = 5
# board = ['~'] * board_size
# treasure_location = random.randint(0, board_size - 1)
# found_treasure = False

# print("___ НАНДИН ЭРДЭНЭС ХАЙХ ТОГЛООМ ___")
# print(f"Далайн эрэг дээр {board_size} нүд байна. Нэгэнд нь эрдэнэс нуугдсан.")
# print(f"Танд олох {number_of_turns} боломж байна.")

# for i in range(5, 0, -1):
#     print(i)

# for i in range(number_of_turns):
#     print(f"\n--- {i + 1}-р үе ---")
#     guiss_str = input(f"0-оос {board_size -1} хооронд таамгаа оруулна уу: ")

#     #exception catch 
#     try:
#         player_guess = int(guiss_str)
#     except ValueError:
#         print("Буруу утга! Та зөвхөн тоо оруулах ёстой.")
#         continue      
#     if player_guess < 0 or player_guess >= board_size:
#         print("Таны таамаг самбарын гадна байна. Анхааралтай сонгоно уу.")
#     elif player_guess == treasure_location:
#         print(f"Баях хүргье! Та {treasure_location}-р нүдэнд нуугдсан эрдэнэсийг оллоо!")
#         found_treasure = True
#         break
#     else:
#         print(("Буруу таалаа. Дахин оролдоно уу."))
#         board[player_guess] = 'X'
# print("\n--- ТОГЛООМ ДУУСЛАА ---")
# if not found_treasure:
#     print(f"Харамсалтай, та ялагдлаа. Эрдэнэс {treasure_location}-р нүдэнд байсан юм.")
