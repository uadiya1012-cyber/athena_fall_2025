#1
# fname = input('Enter a file name: ')

# fhand = open(fname)

# for line in fhand:
#     line = line.rstrip()
#     print(line.upper())

#2
# fname = input('Enter a file name: ')
# fhand = open(fname)
# count = 0
# average = 0
# sum = 0
# for line in fhand:
#     # line = line.rstrip()
#     if line.startswith('X-DSPAM-Confidence:'):
#         print(line)
#         value = float((line.split())[1])
#         sum += value 
#         count = count + 1
        

#         average = sum / count

    
# print(f"Average spam confidence: {average}")

#3
# fname = input('Enter a file name: ')
# if fname == "na na boo boo":
#     print("NA NA BOO BOO - You have been punk'd!")
# else:
#     fhand = open(fname)
#     count = 0
#     for line in fhand:
#         if line.startswith('X-DSPAM-Confidence:'):
#             count += 1
#     print(count)




    
