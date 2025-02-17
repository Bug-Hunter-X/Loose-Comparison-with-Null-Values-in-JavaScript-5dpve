function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0

//This will lead to unexpected behaviour because of the loose comparison
console.log(foo(0,2)); //Output:2
console.log(foo(2,0)); //Output:2
console.log(foo(0,0)); //Output:0