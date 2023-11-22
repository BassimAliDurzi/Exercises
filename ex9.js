function largestNumber(numbers){
    console.log("The largest element = " + Math.max.apply(null, numbers));
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
largestNumber(numbers);
