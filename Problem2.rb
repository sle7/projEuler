# Created by sle7 on 12/1/2015.

#
#    Even Fibonacci Numbers
#

a = 1
b = 2
n = 0
sum = 0
max = 4000000

while b < max do
  if b % 2 == 0
    sum += b
  end
  n = a + b
  a = b
  b = n
end

puts sum
