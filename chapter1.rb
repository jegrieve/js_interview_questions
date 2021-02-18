# Question 1
# Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
# cannot use additional data structures?
def unique?(str)
    str.split("").uniq.length == str.split("").length 
end

puts unique?('abcd') # => true
puts unique?('abccd') # => false
puts unique?('bhjjb') # => false
puts unique?('mdjq') # => true
# Question 2
# Check Permutation: Given two strings,write a method to decide if one is a permutation of the
# other

def is_permutation?(s1, s2)
    return false if s1.length != s2.length
    s1.split("").sort == s2.split("").sort
end

puts is_permutation?('aba', 'aab') # => true
puts is_permutation?('aba', 'aaba') # => false
puts is_permutation?('aba', 'aa') # => false
