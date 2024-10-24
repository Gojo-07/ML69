function factorial(n) {
    if (n === 0 || n === 1) {
    return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
    result *= i;
    }
    return result;
    }
    function fibonacci(num) {
    if (num <= 1) {
    return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
    }
    function findMin(numbers) {
    if (!numbers || numbers.length === 0) {
    throw new Error("Empty array provided");
    }
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
    min = numbers[i];
    }
    }
    return min;
    }
    let numbers = [4, 2, 8, 1, 6];
    console.log(factorial(5)); // Print the factorial of 5
    setTimeout(() => {
    console.log(fibonacci(45)); // Print the result of fibonacci(45) after 3
    seconds
    }, 3000);
    console.log(findMin(numbers)); // Print the minimum number in the array