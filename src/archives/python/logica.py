# LOGICA 1
'''
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
'''

'''my first attempt
numbers_below_10 = [1,2,3,4,5,6,7,8,9]
sum = 0
multiples_of_3_or_5_below_10 = []
for each in numbers_below_10:
    if each % 3==0 or each % 5 == 0:
        multiples_of_3_or_5_below_10.append(each)
        sum += each

print(f'{multiples_of_3_or_5_below_10}:{sum}')
'''

#after consulting chatgpt

#variable to store the sum
sum = 0

#list to store couting numbers below 1000
counting_numbers_below_1000 = []

#list to store multiples of 3 or 5 below 1000
multiples_of_3_or_5_below_1000=[]

for each in range(1,1000):
    counting_numbers_below_1000.append(each)
    if each % 3 == 0 or each % 5 ==0:
        multiples_of_3_or_5_below_1000.append(each)
        sum += each
#all counting numbers below 1000
print(counting_numbers_below_1000)
#multiples of 3 or 5 below 1000
print(f'{multiples_of_3_or_5_below_1000}:{sum}')




#LOGICA 2



        
        