// _____________ task 2______ START
// Написать функцию, которая находит сумму всех чисел кратных 3 или 5 до заданного числа.
// Например для func(10) = 23
console.log('>>>>>Task 2. Sum Multiplate:<<<<<');

const sumMultiples = (number, mult1 = 3, mult2 = 5) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (i % mult1 === 0 || i % mult2 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log('sumMultiples', sumMultiples(10));

// _____________ task 2______ END
