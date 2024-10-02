#logica 1
#sum of all multiples of 3 or 5 below 1000

#my solution
sum = 0
for i in range(1,1000):
  if(i%3 == 0 or i%5 ==0):
    sum+=i
print(sum)

# chatgpt solution
def sum_of_multiples(limit):
    return sum(x for x in range(limit) if x % 3 == 0 or x % 5 == 0)

result = sum_of_multiples(1000)
print(result)

  

