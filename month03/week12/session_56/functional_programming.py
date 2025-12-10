from functools import reduce

def add(a, b):
    return a + b

sum1 = add(1, 2)
print(sum1)

addNumbers = lambda x: x * x
print(addNumbers(5))

nums = [1, 2, 3, 4]
result = list(map(lambda x: x * 2, nums))
print(result)

even = list(filter(lambda x: x % 2 == 0, nums))
print(even)

total = reduce(lambda a, b: a + b, nums)
print(total)

highest = reduce(lambda a, b: a if a > b else b, nums)
print(highest)