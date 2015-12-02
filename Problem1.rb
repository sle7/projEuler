# Created by sle7 on 12/1/2015.

#
# Multiples of 3 and 5

num = 1000
sum = 0

(0..num - 1).each do |i|
  sum += i if i % 3 == 0 || i % 5 == 0
end

puts sum
