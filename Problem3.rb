# Created by sle7 on 12/3/2015.

#
#   Largest Prime Factor
#

n = 600_851_475_143

def largestPrimeFactor(n)
  cur = 2
  largest = 0
  while largest < n
    if n % cur == 0
      largest = cur
      n /= cur
    end
    cur += 1
  end
  puts largest
end

largestPrimeFactor(n)
