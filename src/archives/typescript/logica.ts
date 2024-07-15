//LOGICA 1

/**
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
 */

//variable to store the sum
let sum: number = 0;

//list to store couting numbers below 1000
const counting_numbers_below_1000: number[] = [];

//list to store multiples of 3 or 5 below 1000
const multiples_of_3_or_5_below_1000: number[] = [];

let i: number;
for (let i: number = 1; i < 1000; i++) {
  counting_numbers_below_1000.push(i);
  if (i % 3 === 0 || i % 5 === 0) {
    multiples_of_3_or_5_below_1000.push(i);
    sum += i;
  }
}

console.log(counting_numbers_below_1000);
console.log(`${multiples_of_3_or_5_below_1000}:${sum}`);
