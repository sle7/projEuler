# Created by sle7 on 12/1/2015.

#
#    Even Fibonacci Numbers
#

a = 1
b = 2
n = 0
sum = 0
max = 4_000_000

while b < max
  sum += b if b.even?
  n = a + b
  a = b
  b = n
end

puts sum
