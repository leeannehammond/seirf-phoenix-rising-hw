# Get Started With a Few Reps
#1
puts "Hello World!"
adjective = "Big Bad"
#2
puts "Hello #{adjective} World"
#3
phrase = "Hello World"
puts phrase.upcase

# Nums Array and Enumerables
p nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

#1
p nums.uniq

#2
p nums.pop
p nums.shift
p nums.unshift(5)
p nums.length

#3
p nums.include?(8)

# Use .find_all to find all the numbers greater than 10
p nums.find_all {|n| n > 10}

# use .all? to check if all the numbers are greater than 0?
p nums.all? {|n| n < 0}

# use any? to check if there are any numbers that are divisible by 8
p nums.any? {|n| n%2 == 8}

# use .count to let you know how many numbers are greater than 4
p nums.count { |n| n > 4}

# use .each_with_index to print each item times its index
p nums.each_with_index { |item, index| p "#{index}:#{item}"}

# .find the number that is divisible by 7 and 5 and is greater than 0
p nums.find {|n| n % 7 > 0 and n % 5 >0}

  
# .find_index of the number that is divisible by 5 and 7 and is greater than 0
p nums.find_index { |n| n % 5 > 0 and n % 7 > 0}

# return the .first 3 numbers
p nums.first(3)

# return the .last 5 numbers
p nums.last(5)

# .group_by the modulo of 3 ( % 3 )
p nums.group_by { |n| n % 3}

# use minmax to return the smallest and largest number
p nums.minmax

# use .reject to return all the numbers that are NOT divisible by 3
p nums.reject { |n| n % 3} 
#^ UNSURE  OF  HOW TO PROPERLY EXECUTE THAT ONE

# use .select to return all the numbers divisible by 5
p nums.select {|n| n % 5}

# Color Array
# With the following array:
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# Print out a random color.
p colors.shuffle.first
p colors.sample

# Print out the colors array in reverse order.
p colors.reverse

# Print out all of the colors in the array with all capital letters.
p "colors".upcase
#??? Unsure of that one ^

# 
# Methods
# Write a method named find_area that finds the area of a rectangle when given values for width and height

# REMEMBER: In Ruby, the keyword return is implied and can be omitted!
# def find_area (height, width)
#     for
# end
puts "Enter length:"
l=gets.chomp.to_f
puts "Enter width:"
w=gets.chomp.to_f

# calculating area 
area=l*w

# printing the result
puts "Area of Rectangle is #{area}"

# Write a method named multiply_each_by_five that will loop over the given nums array below and print each number multiplied by 5

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

# def multiply_each_by_five nums.map do |num|
#     num * 5

# end
# p multiply_each_by_five
nums.each do |item|
    item = item * 5
    puts item
end

p nums * 5


# Methods With a Hash
# Use the following given hashes to solve the problems below

# Hashes

 book = {
   title: 'The Great Gatsby',
   author: 'F Scott Fitzgerald',
   year: 1925,
   price: 10
 }

 lamp = {
   type: 'reading',
   brand: 'Ikea',
   price: 25
 }

 table = {
   type: 'bed side',
   brand: 'Crate & Barrel',
   color: 'birch',
   price: 50
 }
# Write a method named print_price that will take in any hash and return the price of the item.
# I literally have no idea. I've looked up so many things about 
# hashes and none of it makes sense. 


# Write a method named print_item_sums that will take in two hashes and will 
# return the sum of the prices for the items in the hashes.




# Solving Problems with Ruby
#Euler Problem 1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, 
# we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.
puts (0..1000).select {|n| n%3==0 || n%5==0}.inject(0) {|s,n| s+=n}

# Primes
# Write a method called check_prime? that will test whether a number is Prime. 
# The method will return true if Prime, false if not.
require 'prime'

def prime?(num)
    num.prime?
end

p prime?(3)

# Write another method called get_primes that will print all the Primes up to an arbitrary 
# limit. For example, if you invoke your method with get_primes 100, it will print all the Prime 
# numbers up to and including 100.
# This method can call on the previous check_prime? method.
require 'prime'

a = (1..100).to_a
p a.select{|e| e.prime? and e <= 100 }
