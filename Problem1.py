##
# Created by sle7 on 10/1/2015.
##

##
# Multiples of 3 and 5
##

maxNum = 1000

def sum35multiple(num):
    total = 0
    for i in range(1, maxNum):
        if i % 3 == 0 or i % 5 == 0:
            total += i
    return total

print(sum35multiple(1000))
