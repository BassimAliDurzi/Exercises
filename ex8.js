function arraySum(numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  console.log("The sum of all elements in this array = " + sum);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arraySum(numbers);
