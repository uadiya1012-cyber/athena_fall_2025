#1
# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print('File cannot be opened: ', fname)
#     exit()

# counts = dict()
# for line in fhand:
#     words = line.split()
#     for word in words:
#         if word not in counts:
#             counts[word] = 1
#         else:
#             counts[word] += 1

# print(counts)

#2
# import datetime
# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print('File cannot be opened:', fname)
#     exit()

# counts = dict()
# for line in fhand:
#     if line.startswith("From "):
#         words = line.split()
#         day = words[2]
#         if day not in counts:
#             counts[day] = 1
#         else:
#             counts[day] += 1
# print(counts)

#3
# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print('File cannot be opened:', fname)
#     exit()

# counts = dict()
# for line in fhand:
#     if line.startswith("From "):
#         words = line.split()
#         email = words[1]
#         if email not in counts:
#             counts[email] = 1
#         else:
#             counts[email] += 1

# print(counts)

#3
# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print('File cannot be opened:', fname)
#     exit()

# counts = dict()
# for line in fhand:
#     if line.startswith("From "):
#         words = line.split()
#         if words[1] not in counts:
#             counts[words[1]] = 1
#         else:
#             counts[words[1]] += 1

# print(counts)


#4
# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print('File cannot be opened:', fname)
#     exit()

# counts = dict()
# for line in fhand:
#     if line.startswith("From "):
#         words = line.split()
#         if words[1] not in counts:
#             counts[words[1]] = 1
#         else:
#             counts[words[1]] += 1


# maxi = 0
# for c in counts:

#     if counts[c] > maxi:
#         max_email = c
#         maxi = counts[max_email]
# print(max_email, maxi)
        
    

 #5
# fname = input('Enter the file name: ')
# try:
#     fhand = open(fname)
# except:
#     print('File cannot be opened:', fname)
#     exit()

# counts = dict()

# for line in fhand:
#     if line.startswith("From "):
#         words = line.split()
#         if len(words) > 1:
#             email = words[1]
#             if '@' in email:
#                 domain = email.split('@')[1]
#                 if domain in counts:
#                     counts[domain] += 1
#                 else:
#                     counts[domain] = 1

# print(counts)
            







    
        
        


 
         



    
        

